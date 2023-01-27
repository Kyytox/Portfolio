import React from "react";

import HeadLineCmd from "./HeadLineCmd";
import LetterByLetterText from "./LetterByLetterText";

function Welcome() {
    return (
        <div className="div-input-terminal">
            <HeadLineCmd text="" />
            <p className="input-welcome">
                {/* <LetterByLetterText text="Welcome I'm Kytox, a developper" timeSpeed={50} /> */}
                <LetterByLetterText text="Bonjour, je suis Kytox, un developpeur" timeSpeed={50} />
            </p>
        </div>
    );
}

export default Welcome;
