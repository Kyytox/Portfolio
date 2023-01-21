import React from "react";

import LetterByLetterText from "./LetterByLetterText";

function HeadAsciiArt() {
    return (
        <div className="head-art-ascii">
            <pre>
                <code>
                    <LetterByLetterText text={`██╗  ██╗██╗   ██╗████████╗ ██████╗ ██╗  ██╗`} timeSpeed={40} />
                    <LetterByLetterText text={`██║ ██╔╝╚██╗ ██╔╝╚══██╔══╝██╔═══██╗╚██╗██╔╝`} timeSpeed={40} />
                    <LetterByLetterText text={`█████╔╝  ╚████╔╝    ██║   ██║   ██║ ╚███╔╝`} timeSpeed={40} />
                    <LetterByLetterText text={`██╔═██╗   ╚██╔╝     ██║   ██║   ██║ ██╔██╗`} timeSpeed={40} />
                    <LetterByLetterText text={`██║  ██╗   ██║      ██║   ╚██████╔╝██╔╝ ██╗`} timeSpeed={40} />
                    <LetterByLetterText text={`╚═╝  ╚═╝   ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═╝`} timeSpeed={40} />
                </code>
            </pre>
        </div>
    );
}

export default HeadAsciiArt;
