import React, { useContext, useState } from "react";
import HeadLineCmd from "./HeadLineCmd";
import { FaCopy } from "react-icons/fa";
import { dataSocials } from "./GlobalVariable";
import { StyleContext } from "./GlobalVariable";

function Socials() {
    const style = useContext(StyleContext);

    const BtnCopyText = (
        <button className="btn-copy-nostr">
            <FaCopy className="btn-copy-nostr" color="white" />
        </button>
    );

    const listSocials = dataSocials.map((data) => (
        <div className="item-socials" key={data.title}>
            <a href={data.link} style={{ color: style.colorText }} target="_blank" rel="noopener noreferrer">
                {data.title}
                {data.title.startsWith("Nostr") ? BtnCopyText : <p></p>}
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
