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
            descr: "Coin Centraliz est un agrégateur de contenu liées aux crypto. Vous retrouverez les Articles de journaux - Vidéos - Podcasts - Chaînes Twitch en live - Thread Twitter ",
            techno: ["Python", "Django", "PostgreSQL", "API", "Bot_Tweeter", "Scrapping"],
        },
        {
            title: "Bitcoin Quiz",
            site: "https://bitcoinquiz.fr/",
            github: "https://github.com/Kyytox/bitcoin_quizz",
            descr: "Gagner des Satoshis avec Bitcoin Quiz. Découvrez ou testez vos connaissances sur Bitcoin et son écosystème (FR - EN)",
            techno: ["Javascript", "Node JS", "React JS", "API", "Lightning Network"],
        },
        {
            title: "Vinyls Dub Scrap",
            site: "http://www.vinylsdubscrap.xyz/",
            github: "https://github.com/Kyytox/vinyls_dub_scrap",
            descr: "App web regroupant les derniers extraits de vinyls des différents shops Reggae Dub.",
            techno: ["Python", "Flask", "Scrapping", "Login/Sign", "Player Audio"],
        },
        {
            title: "IA - Sentiments Tweets",
            site: "https://github.com/Kyytox/app-web-sentiment-twitter-ia",
            github: "https://github.com/Kyytox/app-web-sentiment-twitter-ia",
            descr: "App Web permettant d'analyser, via des graphiques, les sentiments (négatif, positif, neutre) des tweets d'un utilisateur à l'aide d'une IA.",
            techno: ["Python", "IA", "NLP", "Twitter API v2", "React JS", "Flask", "PostgreSQL"],
        },
        {
            title: "Codewars Users Stats",
            site: "https://kyytox.github.io/codewars-user-stats/",
            github: "https://github.com/Kyytox/codewars-user-stats",
            descr: "Outil permettant d'avoir un petit peu plus de détails concernant son avancement sur Codewars",
            techno: ["React JS", "API"],
        },
        {
            title: "Matplotlib - Graph Crypto",
            site: "https://github.com/Kyytox/Matplotlib---Graph",
            github: "https://github.com/Kyytox/Matplotlib---Graph",
            descr: "Initiation a MatploLib, réalisation de graphiques en utilisant les données de l'API Glassnodes (data liées aux crypto/Bitcoin) ",
            techno: ["Python", "Matplotlib", "Pandas", "API"],
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
