import React, { useState, useRef, useEffect } from "react";

import "./App.css";

import StartTerminal from "./startTerminal";
import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";
import { useHandleClick } from "./shared-functions";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const inputRef = useRef(null);
    const { handleClick, clicked } = useHandleClick(inputRef);

    setTimeout(() => {
        setIsVisible(true);
    }, 10500);

    const handleSubmit = (event) => {
        event.preventDefault();

        // update setOutput avec l'element récup via CallComposant
        setOutput([...output, CallComposant(input)]);
        setInput("");
    };

    // For caret position at the end
    useEffect(() => {
        console.log("test");
        if (inputRef.current) {
            handleClick();
        }
    });

    const divForm = (
        <>
            <div className="div-input-terminal">
                <HeadLineCmd />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} ref={inputRef} onChange={(event) => setInput(event.target.value)} autofocus />
                </form>
            </div>
        </>
    );

    return (
        <div className="app" onClick={handleClick}>
            <div id="terminal">
                <StartTerminal />
                <div>{output}</div>

                {/* wait end of StartTerminal and display input Terminal */}
                {isVisible && <div>{divForm}</div>}
            </div>
        </div>
    );
}
export default App;
