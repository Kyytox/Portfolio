import React from "react";

import LetterByLetterText from "./LetterByLetterText";

function HeadAsciiArt() {
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
            <LetterByLetterText text="Welcome on my portfolio, he is interactive but u can use terminal command" timeSpeed={50} />
        </div>
    );
}

export default HeadAsciiArt;
