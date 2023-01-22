import React, { useState, useRef } from "react";

export function useHandleClick(inputRef) {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        // const divTerminal = document.querySelectorAll("#input-terminal");
        // const myRef.current = divTerminal[divTerminal.length - 1];
        // console.log("divTerminal", divTerminal[divTerminal.length - 1]);
        inputRef.current.focus();
        inputRef.current.scrollIntoView();
    }

    return { handleClick, clicked };
}
