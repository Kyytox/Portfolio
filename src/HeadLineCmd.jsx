import React, { useState } from "react";

function HeadLineCmd({ text }) {
    return (
        <div className="line-cmd">
            <p className="index-line-cmd">
                <font color="red">visitor</font>
                <font color="white">@</font>
                <font color="green">kytox.dev</font>
                <font color="white">:~$</font>
            </p>
            {text && <p>{text}</p>}
        </div>
    );
}

export default HeadLineCmd;
