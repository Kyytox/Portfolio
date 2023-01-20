import React from "react";

import HeadLineCmd from "./HeadLineCmd";

function NavBar() {
    const dataMenu = [
        { title: "skills", desc: " - display the technologies I have worked with recently" },
        { title: "pojects", desc: " - projects that I've coded" },
        { title: "socials", desc: " - check my social accounts" },
        { title: "bitcoin", desc: " - Bitcoin" },
        { title: "menu", desc: " - display Menu" },
        { title: "themes", desc: " - change themes" },
    ];

    const listMenu = dataMenu.map((data) => (
        <div className="item-menu" key={data.title} onClick={() => displayNav(data.title)}>
            <a>{data.title}</a>
            <a>{data.desc}</a>
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="menu" />
            </div>
            <div className="navbar">{listMenu}</div>
        </div>
    );
}

export default NavBar;
