import React from "react";

import HeadLineCmd from "./HeadLineCmd";
import LetterByLetterText from "./LetterByLetterText";

function Welcome() {
    return (
        <div className="div-input-terminal">
            <HeadLineCmd text="" />
            <span>
                <LetterByLetterText text="Welcome I'm Kytox, a developper" timeSpeed={50} />
            </span>
        </div>
    );
}

export default Welcome;
