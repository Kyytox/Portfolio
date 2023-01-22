import React, { useState, useRef, useEffect } from "react";

import "./App.css";

import StartTerminal from "./startTerminal";
import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    setTimeout(() => {
        setIsVisible(true);
    }, 10500);

    const handleKeyPress = (event) => {
        if (event.key === "Tab") {
            console.log("test");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // update setOutput avec l'element récup via CallComposant
        setOutput([...output, CallComposant(input)]);
        setInput("");
    };

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.scrollIntoView();
    }

    // For caret position at the end
    useEffect(() => {
        if (inputRef.current) {
            handleClick();
        }
    });

    const divForm = (
        <>
            <div className="div-input-terminal">
                <HeadLineCmd />
                <form id="form-terminal" onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" value={input} id="input-terminal" onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyPress} />
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
