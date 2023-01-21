import React, { useState, useRef } from "react";

import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";
import { useHandleClick } from "./shared-functions";

function NavBar() {
    const inputRef = useRef(null);
    const { handleClick, clicked } = useHandleClick(inputRef);
    const [output, setOutput] = useState([]);

    const dataMenu = [
        { title: "skills", desc: " - display the technologies I have worked with recently" },
        { title: "projects", desc: " - projects that I've coded" },
        { title: "socials", desc: " - check my social accounts" },
        { title: "bitcoin", desc: " - Bitcoin" },
        { title: "menu", desc: " - display Menu" },
        { title: "themes", desc: " - change themes" },
    ];

    const displayCompos = (event) => {
        // update setOutput avec l'element récup via CallComposant
        setOutput([...output, CallComposant(event)]);
        handleClick();
    };

    const listMenu = dataMenu.map((data) => (
        <div className="item-menu" key={data.title} onClick={() => displayCompos(data.title)}>
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
            {output}
        </div>
    );
}

export default NavBar;
