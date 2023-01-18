import React, { useState } from "react";
import LetterByLetterText from "./LetterByLetterText";

function LineCmd({ text }) {
    return (
        <div className="line-cmd">
            <p className="index-line-cmd">
                <font color="red">visitor</font>
                <font color="white">@</font>
                <font color="green">kytox.dev</font>
                <font color="white">:~$</font>
            </p>

            <p className="input-line-cmd">
                <LetterByLetterText text={text} timeSpeed={50} />
            </p>
        </div>
    );
}

export default LineCmd;
