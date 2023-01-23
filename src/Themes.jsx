import React from "react";
import HeadLineCmd from "./HeadLineCmd";
import { dataThemes } from "./GlobalVariable";

function Themes() {
    const listThemes = dataThemes.map((data) => (
        <div className="item-themes" key={data.title}>
            <p className={"theme-" + data.title}>{data.title}</p>
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="themes" />
            </div>
            <div className="div-themes">{listThemes}</div>
            <p className="p-themes">Usage: click on "theme-name"</p>
            <p className="p-themes">Usage: themes set "theme-name"</p>
        </div>
    );
}

export default Themes;
