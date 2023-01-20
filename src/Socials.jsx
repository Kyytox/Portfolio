import React from "react";
import { SiPython, SiJavascript, SiNodedotjs, SiReact, SiDjango, SiFlask } from "react-icons/si";

import HeadLineCmd from "./HeadLineCmd";

function Socials() {
    const dataSocials = [
        { title: "Twitter: Kytox_", link: "https://twitter.com/Kytox_" },
        { title: "Github: Kyytox", link: "https://github.com/Kyytox" },
        { title: "Nostr: npub14gtck3r2hvg4syjncjpfsk2un5sraap2ea6gtmy9ga20f4ch0r0ssrxg3e", link: "https://astral.ninja/" },
    ];

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
