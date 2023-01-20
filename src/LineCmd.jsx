import React, { useState } from "react";
import LetterByLetterText from "./LetterByLetterText";

function LineCmd({ text }) {
    return (
        <>
            <p className="input-line-cmd">
                <LetterByLetterText text={text} timeSpeed={50} />
            </p>
        </>
    );
}

export default LineCmd;
