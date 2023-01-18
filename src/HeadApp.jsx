import React from "react";

import LetterByLetterText from "./LetterByLetterText";

function HeadAsciiArt({ text }) {
    return (
        <div className="head-art-ascii">
            <pre>
                <code>
                    <LetterByLetterText text={`██╗  ██╗██╗   ██╗████████╗ ██████╗ ██╗  ██╗`} timeSpeed={50} />
                    <LetterByLetterText text={`██║ ██╔╝╚██╗ ██╔╝╚══██╔══╝██╔═══██╗╚██╗██╔╝`} timeSpeed={50} />
                    <LetterByLetterText text={`█████╔╝  ╚████╔╝    ██║   ██║   ██║ ╚███╔╝`} timeSpeed={50} />
                    <LetterByLetterText text={`██╔═██╗   ╚██╔╝     ██║   ██║   ██║ ██╔██╗`} timeSpeed={50} />
                    <LetterByLetterText text={`██║  ██╗   ██║      ██║   ╚██████╔╝██╔╝ ██╗`} timeSpeed={50} />
                    <LetterByLetterText text={`╚═╝  ╚═╝   ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═╝`} timeSpeed={50} />
                </code>
            </pre>
        </div>
    );
}

export default HeadAsciiArt;
