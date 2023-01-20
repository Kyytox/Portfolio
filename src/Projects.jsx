import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import HeadLineCmd from "./HeadLineCmd";

function Projects() {
    const dataProjects = [
        {
            title: "Coin Centraliz",
            site: "http://www.coincentraliz.fr/",
            github: "https://github.com/Kyytox/Coin_Centraliz",
            descr: "Coin Centraliz est un agrégateur de contenu liées au domaine de la cryptomonnaie. Plusieurs type de contenu sont disponible Articles de journaux Vidéos et podcasts Chaînes Twitch en live Thread Twitter ",
            techno: ["Python", "Django", "PostgreSQL", "API", "Bot_Tweeter", "Scrapping"],
        },
        {
            title: "Bitcoin Quiz",
            site: "https://bitcoinquiz.fr/",
            github: "https://github.com/Kyytox/bitcoin_quizz",
            descr: "Gagner des Satoshis avec Bitcoin Quiz. Découvrez ou testez vos connaissances sur Bitcoin et son écosystème 10 Questions par partie 2 satoshis par bonne réponse 100 satoshis par jour Langues : FR - EN",
            techno: ["Javascript", "Node JS", "React JS", "API", "Lightning Network"],
        },
        {
            title: "Vinyls Dub Scrap",
            site: "http://www.vinylsdubscrap.xyz/",
            github: "https://github.com/Kyytox/vinyls_dub_scrap",
            descr: "Ecouter les nouveaux extraits de vinyls des différents shops Reggae Dub. Tous les 3 jours des nouveaux vinyls sont ajoutés et vous pouvez écouter les écoutés via un lectuer intégré.  Un compte utilisateur peut etre créé pour ajouter certains vinyls en favoris.",
            techno: ["Python", "Flask", "Scrapping", "Login/Sign"],
        },
        {
            title: "Matplotlib - Graph Crypto",
            site: "https://github.com/Kyytox/Matplotlib---Graph",
            github: "https://github.com/Kyytox/Matplotlib---Graph",
            descr: "Graphiques réalisés grâce à Matplotlib et a l'API du site Glassnode  l'API fournit des données liées à la cryptomonnaie. Elles sont ensuite traitées et formattées avec Pandas. Puis sont affichées sous forme de graphique (Bar, Camembert, lignes, map) ",
            techno: ["Python", "Matplotlib", "Pandas", "API"],
        },
        {
            title: "Analyse sentiments Tweets par IA",
            site: "https://github.com/Kyytox/feelings-twitter-ia/blob/master/Analyse.md/",
            github: "https://github.com/Kyytox/feelings-twitter-ia/",
            descr: "Analyse des sentiments (négatif, positif, neutre) des tweets de différents média d'informations à l'aide d'une IA. J'ai utilisé un modèle de deep learning pré-entraîné, appelé BERT crée par Google qui permet de résoudre des problèmes de NLP (Natural Language processing).NLP est un sous-domaine du Machine learning qui a pour objectif de donner à des programmes informatiques la capacité de comprendre et de traiter le langage humain",
            techno: ["Python", "IA", "NLP", "Pandas"],
        },
        {
            title: "Codewars Users Stats",
            site: "https://kyytox.github.io/codewars-user-stats/",
            github: "https://github.com/Kyytox/codewars-user-stats",
            descr: "Outil pour avoir un petit peu plus de détails concernant son avancement sur Codewars Utilisation de l'API v1 de Codewars. Codewars est une plate-forme qui vous aide à apprendre, à vous entraîner et à améliorer vos compétences en codage en résolvant des exos de nombreux types et niveaux de difficulté.",
            techno: ["React JS", "API", "Array"],
        },
    ];

    const listProjects = dataProjects.map((data) => (
        <div className="item-project" key={data.title}>
            <div className="head-projects">
                <h3>{data.title}</h3>
                <span>
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub size={20} />
                    </a>
                    <a href={data.site} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={20} />
                    </a>
                </span>
            </div>
            <div className="descr-project">
                <p>{data.descr}</p>
            </div>
            <div className="techno-project">
                {data.techno.map((headers) => {
                    return <p key={headers}>{headers}</p>;
                })}
            </div>
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="projects" />
            </div>
            <div className="div-projects">{listProjects}</div>
        </div>
    );
}

export default Projects;
