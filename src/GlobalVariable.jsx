import React, { createContext } from "react";
import { SiPython, SiJavascript, SiNodedotjs, SiReact, SiDjango, SiFlask } from "react-icons/si";
import LnLogo from "./assets/ln.jpg";
import BtcLogo from "./assets/btc.jpg";

// Création d'un context pour partager l'état style
export const StyleContext = createContext();

export const dataMenu = [
    { title: "skills", desc: " - Afficher les outils que j'ai utilisés" },
    { title: "projects", desc: " - Projets que j'ai codé" },
    { title: "socials", desc: " - Mes réseaux" },
    { title: "bitcoin", desc: " - Bitcoin" },
    { title: "menu", desc: " - Afficher le menu" },
    { title: "themes", desc: " - Changer le thème" },
    { title: "clear", desc: " - Clear" },
    // { title: "skills", desc: " - display the technologies I have worked with recently" },
    // { title: "projects", desc: " - projects that I've coded" },
    // { title: "socials", desc: " - check my social accounts" },
    // { title: "bitcoin", desc: " - Bitcoin" },
    // { title: "menu", desc: " - display Menu" },
    // { title: "themes", desc: " - change themes" },
    // { title: "clear", desc: " - clear history" },
];

export const dataSkills = [
    { title: "Python", icon: <SiPython size={35} /> },
    { title: "JavaScript", icon: <SiJavascript size={35} /> },
    { title: "Node JS", icon: <SiNodedotjs size={35} /> },
    { title: "React JS", icon: <SiReact size={35} /> },
    { title: "Django", icon: <SiDjango size={35} /> },
    { title: "Flask", icon: <SiFlask size={35} /> },
];

export const dataSocials = [
    { title: "Twitter: Kytox_", link: "https://twitter.com/Kytox_" },
    { title: "Github: Kyytox", link: "https://github.com/Kyytox" },
    { title: "Nostr: npub14gtck3r2hvg4syjncjpfsk2un5sraap2ea6gtmy9ga20f4ch0r0ssrxg3e", link: "https://astral.ninja/" },
];

export const dataBitcoin = [
    {
        // wasabi
        title: "Bitcoin",
        addr: "bc1qgpswu7r5w2pgchtffgcmhxewvz0vy0dup4jk4g",
        image: BtcLogo,
    },
    {
        // wallet of satoshis
        title: "Lightning Network",
        addr: "lnbc1p3uky94pp5qhcaxhevj67733kwakad2r72rx24ltj6kt03enna9py7rltypmdsdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5nswx3flsxtr00lwm6ns02wexcltdzz5zsa4mznstf7wkt5as0tzq9qyyssqq34q22p0gcy3arkg8mfpt293gs55azjrg3zv98fhgtfmynn96nspvgtr4e59t4epgzp9druralz9lmg7ev00qzkge5lhy90kz35t24qqs3cxv0",
        image: LnLogo,
    },
];

export const dataThemes = [
    {
        title: "dark",
        background: "black",
        colorTextHead: ["red", "white", "orange", "white"],
        colorText: "white",
        colorMenu: "#f74242",
    },
    {
        title: "light",
        background: "white",
        colorTextHead: ["red", "black", "orange", "black"],
        colorText: "black",
        colorMenu: "#f74242",
    },
    {
        title: "ubuntu",
        background: "rgb(45 9 34)",
        colorTextHead: ["#80D932", "white", "#80D932", "white"],
        colorText: "white",
        colorMenu: "#80D932",
    },
    {
        title: "retro",
        background: "#1a1a1a",
        colorTextHead: ["#714896", "white", "#714896", "white"],
        colorText: "#00B6D6",
        colorMenu: "#EA549F",
    },
];
