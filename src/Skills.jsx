import React from "react";
import HeadLineCmd from "./HeadLineCmd";
import { dataSkills } from "./GlobalVariable";

function Skills() {
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
