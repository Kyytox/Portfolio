import React from "react";
import { SiPython, SiJavascript, SiNodedotjs, SiReact, SiDjango, SiFlask } from "react-icons/si";

import HeadLineCmd from "./HeadLineCmd";

function Skills() {
    const dataSkills = [
        { title: "Python", icon: <SiPython size={35} /> },
        { title: "JavaScript", icon: <SiJavascript size={35} /> },
        { title: "Node JS", icon: <SiNodedotjs size={35} /> },
        { title: "React JS", icon: <SiReact size={35} /> },
        { title: "Django", icon: <SiDjango size={35} /> },
        { title: "Flask", icon: <SiFlask size={35} /> },
    ];

    const listSkills = dataSkills.map((data) => (
        <div className="item-skills" key={data.title}>
            <p>{data.icon}</p>
            <p>{data.title}</p>
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="skills" />
            </div>
            <div className="div-skills">{listSkills}</div>
        </div>
    );
}

export default Skills;
