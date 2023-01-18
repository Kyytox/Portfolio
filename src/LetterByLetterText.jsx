import React, { useState } from "react";

function LetterByLetterText({ text, timeSpeed }) {
    const [displayedText, setDisplayedText] = useState("");
    const timer = timeSpeed;

    React.useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, timer);
        return () => clearInterval(interval);
    }, [text]);

    return <div>{displayedText}</div>;
}

export default LetterByLetterText;
