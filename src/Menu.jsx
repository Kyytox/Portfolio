import React, { useContext, useRef, useEffect } from "react";

import HeadLineCmd from "./HeadLineCmd";
import { dataMenu } from "./GlobalVariable";
import { StyleContext } from "./GlobalVariable";

function NavBar() {
    const inputRef = useRef(null);
    const style = useContext(StyleContext);

    // For caret position at the end
    useEffect(() => {
        // collect the last input Terminal
        const divTerminal = document.querySelectorAll("#input-terminal");
        inputRef.current = divTerminal[divTerminal.length - 1];
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.scrollIntoView();
        }
    });

    const listMenu = dataMenu.map((data) => (
        <div className="item-menu" key={data.title}>
            <p style={{ color: style.colorMenu }} className={"menu-" + data.title}>
                {data.title}
            </p>
            <p className={"menu-" + data.title}>{data.desc}</p>
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
