import React, { useState, useRef, useEffect } from "react";

import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";

function NavBar() {
    const inputRef = useRef(null);
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
    };

    // For caret position at the end
    useEffect(() => {
        const divTerminal = document.querySelectorAll("#input-terminal");
        inputRef.current = divTerminal[divTerminal.length - 1];
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.scrollIntoView();
        }
    });

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
