from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message
import pandas as pd
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, validators
from wtforms.validators import DataRequired, Email
import email_validator
import json
import mimetypes
mimetypes.add_type('application/javascript', '.mjs')
 
class ContactForm(FlaskForm):
  name = StringField("Nom", validators=[DataRequired()])
  email = StringField("Email", validators=[DataRequired(), Email(granular_message=True)])
  subject = StringField("Sujet")
  message = TextAreaField("Message")
  submit = SubmitField(label=("Envoyer"))
 

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







@app.route('/test', methods=["GET", "POST"])
def test():
    return render_template('tools/test.html' )

# main driver function
if __name__ == '__main__':
    app.run(debug=True)



    # <input type="submit" name="category" class="btn-57" value={{i}}>