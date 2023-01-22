import React from "react";
import HeadLineCmd from "./HeadLineCmd";
import { dataSocials } from "./GlobalVariable";

function Socials() {
    const listSocials = dataSocials.map((data) => (
        <div className="item-socials" key={data.title}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
                {data.title}
            </a>
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="socials" />
            </div>
            <div className="div-socials">{listSocials}</div>
        </div>
    );
}

export default Socials;
