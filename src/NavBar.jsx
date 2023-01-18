import React from "react";

import LetterByLetterText from "./LetterByLetterText";

function NavBar() {
    const dataMenu = [
        { title: "Skills", desc: " - display the technologies I have worked with recently" },
        { title: "Pojects", desc: " - projects that I've coded" },
        { title: "Socials", desc: " - check my social accounts" },
        { title: "Themes", desc: " - change themes" },
        { title: "Menu", desc: " - display Menu" },
    ];

    const listMenu = dataMenu.map((data) => (
        <div>
            <a>{data.title}</a>
            <a>{data.desc}</a>
        </div>
    ));

    return <div className="navbar">{listMenu}</div>;
}

export default NavBar;
