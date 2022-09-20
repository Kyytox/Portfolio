from email.utils import localtime
from tabnanny import check
from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, validators, SelectField, RadioField
from wtforms.validators import DataRequired, Email
from selenium import webdriver
from bs4 import BeautifulSoup
import json
import pandas as pd
import time
import requests 


class ContactForm(FlaskForm):
  name = StringField("Nom", validators=[DataRequired()])
  email = StringField("Email", validators=[DataRequired(), Email(granular_message=True)])
  subject = StringField("Sujet")
  message = TextAreaField("Message")
  submit = SubmitField(label=("Envoyer"))

class SearchJobsForm(FlaskForm):
  metier = StringField("Métier", validators=[DataRequired()], render_kw={"placeholder": "Métier"})
  location = StringField("Location", render_kw={"placeholder": "Location"})
  contrats = SelectField(u'Contrats', choices=[('CDI', 'CDI'), ('CDD', 'CDD'), ('ALT', 'Alternance')])
  submit = SubmitField(label=("Rechercher"))
 

app = Flask(__name__)
app.secret_key = 'development key'

# configuration of mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config["MAIL_USERNAME"] = 'thomascaillault301297@gmail.com'
app.config["MAIL_PASSWORD"] = 'imej bzav qftf izez'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
 

@app.route('/', methods=["GET", "POST"])
def portfolio():

    form = ContactForm()
    msg = ''
    if request.method == 'GET':
        if request.values:
            templ = 'portfolio/portfolio_EN.html' if request.values['lang'] == "EN" else 'portfolio/portfolio.html' 
            return render_template(templ, form=form, msg=msg)

        return render_template('portfolio/portfolio.html', form=form, msg=msg)
    elif request.method == 'POST':
        if form.validate_on_submit():
            msg = Message(form.subject.data, sender=form.email.data, recipients=['thomascaillault301297@gmail.com'])
            msg.body = """
            From: %s <%s>
            %s
            """ % (form.name.data, form.email.data, form.message.data)
            mail.send(msg)
            form.name.data = ''
            form.email.data = ''
            form.subject.data = ''
            form.message.data = ''
            msg = 'Mail Envoye avec succes' 
            return render_template('portfolio/portfolio.html', form=form, msg=msg)
        return render_template('portfolio/portfolio.html', form=form, msg=msg)










@app.route('/tools', methods=["GET", "POST"])
def tools():

    xDelay = 200
    categories = ["All","Icons","IDE","Fonts","Logo","CSS","Image","Colors","Multi","JS","API","GitHub","CheatSheets","Social_Media"]

    # read json to data frame                                                                                                    
    with open('./static/json/tools.json', encoding='utf-8') as json_data:
        data = json.load(json_data)

    if request.method == 'GET':
        df = pd.DataFrame(data["All"])
        dfLen = len(df)    
    elif request.method == 'POST':
        category = str(request.form.get('category'))
        df = pd.DataFrame(data[category])
        dfLen = len(df)  
    
    df=df.sample(frac=1).reset_index(drop=True)
    print(df)
    return render_template('tools/tools.html',categories=categories, df=df, dfLen=dfLen, xDelay=xDelay)















@app.route('/searchjobs', methods=["GET", "POST"])
def searchJobs():
    form = SearchJobsForm()

    if request.method == 'GET' and request.args.get('metier') != None:
        metier_list = request.args.get('metier').split()
        loc_list = request.args.get('location').split() 

        check_list = request.args.getlist('checkbox')

        cpt_metier = 0
        cpt_loc = 0
        for x in metier_list:
            metier = x if cpt_metier == 0 else metier + '+' + x
            cpt_metier = cpt_metier + 1 

        for x in loc_list:
            location = x if cpt_loc == 0 else location + '+' + x
            cpt_loc = cpt_loc + 1 

        contrat = request.args.get('contrats')

        return redirect(url_for('resultJobs',metier = metier, loc = location, contrat=contrat, check_list=check_list))

    return render_template('searchJobs/accueil.html', form=form)


@app.route('/result=<metier>+<loc>+<contrat>+<check_list>', methods=["GET", "POST"])
def resultJobs(metier , loc, contrat, check_list):
    form = SearchJobsForm()
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    jobs_list = []
    competences = []
    check = check_list[2:-2].split("', '")

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    # wd1 = webdriver.Chrome("chromedriver.exe")
    # wd2 = webdriver.Chrome("chromedriver.exe")
    # wd3 = webdriver.Chrome("chromedriver.exe")


    if check[0] == "on":
        ############### Joob.dev ######################################   
        source = "www.jooob.dev"
        url = f"https://www.jooob.dev/recherche?qmetier={metier}&qlieu={loc}"
        r = requests.get(url, headers)
        soup = BeautifulSoup(r.content, 'html.parser')

        divs = soup.find_all('div', class_='ads box-light')

        for item in divs:
            link = item.find('h2').a['href']
            title = item.find('h2').text
            location = item.find('span', itemprop="addressLocality").text
            contrat_job = item.find('strong', class_="refcontrat").text

            salary = ""
            if item.find('strong', class_="refsalaire") != None:
                salary = item.find('strong', class_="refsalaire").text
            
            date = item.find('span', itemprop="datePosted").text
            descr = item.find('p', class_="gray").text

            company = ""
            
            li = item.find_all('li')
            for elem in li:
                competences.append(elem.find('a').text)

            list_append_jobs = [{
                'source': source,
                'link': link,
                'title': title,
                'company': company,
                'competences': competences,
                'descr': descr,  
                'contrat_job': contrat_job,  
                'location': location,  
                'date': date,
                'salary': salary
            }]
            
            jobs_list.append(list_append_jobs)
            competences = []


    if check[1] == "on":
        ############### emplois Informatique.fr ###################################### 
        source = "www.emplois-informatique.fr"
        if contrat == "CDI":
            lib_contrat = "cdi"
        elif contrat == "CDD":
            lib_contrat = "cdd-et-interim"
        else:
            lib_contrat = "apprentissages-et-alternances"

        url = f"https://www.emplois-informatique.fr/{lib_contrat}?metier={metier}&lieu={loc}"
        print(url)
        r = requests.get(url, headers)
        soup = BeautifulSoup(r.content, 'html.parser')

        divs = soup.find_all('div', class_='ads box-light')

        for item in divs:
            link = item.find('h3').a['href']
            title = item.find('h3').text
            location = item.find('span', class_="refville").text
            if item.find('strong', class_="refsalaire") != None:
                salary = item.find('strong', class_="refsalaire").text

            date = item.find('i').text
            descr = item.find('p', class_="gray").text
            company = ""
                
            li = item.find_all('li')
            for elem in li:
                competences.append(elem.find('a').text)
            
            list_append_jobs = [{
                'source': source,
                'link': link,
                'title': title,
                'company': company,
                'competences': competences,
                'descr': descr,  
                'contrat_job': contrat_job,  
                'location': location,  
                'date': date,
                'salary': salary
            }]
            
            jobs_list.append(list_append_jobs)
            competences = []


    if check[2] == "on":
        ############### Hello work ###################################### 
        source = "www.hellowork.com"
        url = f"https://www.hellowork.com/fr-fr/emploi/recherche.html?k={metier}&k_autocomplete=http%3A%2F%2Fwww.rj.com%2FCommun%2FPost%&l={loc}&l_autocomplete=http%3A%2F%2Fwww.rj.com%2Fcommun%2Flocalite%2Fcommune&c={contrat}&p=1"
        r = requests.get(url, headers)
        soup = BeautifulSoup(r.content, 'html.parser')

        li = soup.find_all('li', class_="!tw-mb-6")

        for item in li:
            link = "https://www.hellowork.com/fr-fr/emplois/" + item.find('div')['id'] + '.html'
            title = item.find('h3', class_="!tw-mb-0").text
            company = item.find('span', class_="tw-mr-2").text
            contrat_job = item.find('span', class_="tw-w-max").text
            location = item.find('span', class_="tw-text-ellipsis tw-whitespace-nowrap tw-block tw-overflow-hidden 2xs:tw-max-w-[20ch]").text
            date = item.find('span', class_="md:tw-mt-0 tw-text-xs").text
            salary = ""

            descr = ""
            if item.find('span', class_="highlight tw-mt-3") != None:
                descr = item.find('span', class_="highlight tw-mt-3").text[11:]
            
            list_append_jobs = [{
                'source': source,
                'link': link,
                'title': title,
                'company': company,
                'competences': competences,
                'descr': descr,  
                'contrat_job': contrat_job,  
                'location': location,  
                'date': date,
                'salary': salary
            }]
            
            jobs_list.append(list_append_jobs)



    if check[3] == "on":
        ############### Talent.com ######################################
        source = "fr.talent.com"
        url = f"https://fr.talent.com/jobs?k={metier}&l={loc}&radius=15&id="
        r = requests.get(url, headers)
        soup = BeautifulSoup(r.content, 'html.parser')

        divs = soup.find_all('div', class_="card card__job")

        y = 0

        for item in divs:
            link = f"https://fr.talent.com/jobs?k={metier}&l={loc}&radius=15&id=" + divs[y]["data-id"]
            title = item.find('h2', class_="card__job-title").text
            location = item.find('div', class_="card__job-location").text
            company = item.find('div', class_="card__job-empname-label").text
            descr = item.find('p', class_="card__job-snippet").text
            salary = ""
            competences = ""
            y = y + 1 

            list_append_jobs = [{
                'source': source,
                'link': link,
                'title': title,
                'company': company,
                'competences': competences,
                'descr': descr,  
                'contrat_job': contrat_job,  
                'location': location,  
                'date': date,
                'salary': salary
            }]
            
            jobs_list.append(list_append_jobs)

        
        
        
        
        
        
    if check[4] == "on":
        # ############### Welcome to Jungle ###################################### 
        source = "www.welcometothejungle.com"
        
        # wd1.get("https://www.welcometothejungle.com/fr/jobs?page=1&groupBy=job&sortBy=mostRecent&query=developpeur+web+&aroundQuery=Grenoble%2C+France&aroundLatLng=45.19398%2C5.73206&refinementList%5Bcontract_type_names.fr%5D%5B%5D=CDI&aroundRadius=20000")
        # time.sleep(2)

        # soup = BeautifulSoup(wd1.page_source, 'html.parser')

        # section = soup.find('section', class_="sc-1t5j2hu-0 jfncFU")
        # for x in section.find_all('li', class_="ais-Hits-list-item"):
        #     link = "https://www.welcometothejungle.com" + x.find('a')['href']
        #     title = x.find('h3', class_="sc-7dlxn3-5 ineDNW").text
        #     company = x.find('h4', class_="sc-7dlxn3-6 jHFSmB").text
        #     loca = str(x.find('span', class_="sc-1lvyirq-2 gTmGWh"))

        #     if loca == 'None':
        #         location = x.findAll('span', class_="sc-1lvyirq-2 gRznTA")[1].text
        #     else:
        #         pos1 = loca.find('>')
        #         pos2 = loca.find('/')
        #         location = loca[pos1+1:pos2-1]

        #     contrat_job = x.find('li', class_="sc-1lvyirq-0 hqtUBk").text
        #     date = x.find('time').text
        #     salary = ""
        #     competences = ""

        #     list_append_jobs = [{
        #         'source': source,
        #         'link': link,
        #         'title': title,
        #         'company': company,
        #         'competences': competences,
        #         'descr': descr,  
        #         'contrat_job': contrat_job,  
        #         'location': location,  
        #         'date': date,
        #         'salary': salary
        #     }]
            
        #     jobs_list.append(list_append_jobs)




    if check[5] == "on":
        # ############### Meteo Jobs ######################################
        source = "www.meteojob.com" 
        # url="https://www.meteojob.com/jobs/meteo?job=6152~ENTRY_LEVEL~INTERMEDIATE~SENIOR~EXPERT&location=3014728~20&sorting=DATE"
        # wd2.get(url)

        # time.sleep(2)
        # soup = BeautifulSoup(wd2.page_source, 'html.parser')

        # main = soup.find('main')

        # for x in main.find_all('article'):
        #     if x.find('a').text == 'RA':
        #         continue

        #     title = x.find('h2').text
        #     y = 0 
        #     for i in x.find_all('p'):
                
        #         # récup company, ville, contract
        #         if "Candidature" in i.text:
        #             continue
                
        #         if y == 0:
        #             date = i.text
        #         elif y == 1:
        #             link = url+'#job-offer-'+i['id'][:8]
        #         elif y == 2:
        #             company = i.text
        #         elif y == 3:
        #             location = i.text
        #         else:
        #             contrat_job = i.text
        #         y = y+1
                
        #     salary = ""
        #     competences = ""
        #     list_append_jobs = [{
        #         'source': source,
        #         'link': link,
        #         'title': title,
        #         'company': company,
        #         'competences': competences,
        #         'descr': descr,  
        #         'contrat_job': contrat_job,  
        #         'location': location,  
        #         'date': date,
        #         'salary': salary
        #     }]
            
        #     jobs_list.append(list_append_jobs)



    if check[6] == "on":
        # ############### Apec.fr ###################################### 
        y = 0
        # source = "www.apec.fr"
        # wd3.get("https://www.apec.fr/candidat/recherche-emploi.html/emploi?motsCles=d%C3%A9veloppeur%20web&lieux=574792&distance=15")

        # time.sleep(2)
        # soup = BeautifulSoup(wd3.page_source, 'html.parser')

        # div_result = soup.find('div', class_="container-result")
        # a_result = div_result.find_all('a')

        # for i in div_result.find_all('div', class_="card-body"):
        #     link = 'https://www.apec.fr' + a_result[y]['href']
        #     title = i.find('h2').text
        #     company = i.find('p', class_="card-offer__company").text
        #     competences = i.find('li').text
        #     descr = i.find('p', class_="card-offer__description").text
            
        #     li = i.find('ul', class_="important-list")

        #     contrat_job = li.findAll('li')[0].text
        #     location = li.findAll('li')[1].text
        #     date = li.findAll('li')[2].text
        #     salary = ""

        #     y = y + 1 

        #     list_append_jobs = [{
        #         'source': source,
        #         'link': link,
        #         'title': title,
        #         'company': company,
        #         'competences': competences,
        #         'descr': descr,  
        #         'contrat_job': contrat_job,  
        #         'location': location,  
        #         'date': date,
        #         'salary': salary
        #     }]

        #     jobs_list.append(list_append_jobs)


    # wd1.quit()
    # wd2.quit()
    # wd3.quit()
    return render_template('searchJobs/resultJobs.html', form=form, jobs_list=jobs_list)

# main driver function
if __name__ == '__main__':
    app.run(debug=True)
