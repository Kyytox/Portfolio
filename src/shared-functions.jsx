import React, { useState } from "react";

export function useHandleClick(inputRef) {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.scrollIntoView();
    }

    return { handleClick, clicked };
}
