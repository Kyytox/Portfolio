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

    // display input Terminal x seconde after load page
    setTimeout(() => {
        setIsVisible(true);
    }, 10500);

    // verif if press key is TAB
    const handleKeyPress = (event) => {
        if (event.key === "Tab") {
            console.log("test");
        }
    };

    // submit form terminal
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input === "clear") {
            console.log("clear");
            setOutput([]);
            setInput("");
        } else {
            // update setOutput avec l'element récup via CallComposant
            setOutput([...output, CallComposant(input)]);
            setInput("");
        }
    };

    // evenement click for focus input terminal
    function handleClick(event) {
        console.log("event.target.className", event.target.className);

        if (event.target.className) {
            console.log("class exist");
            console.log(event.target.className.search("menu-"));
            if (event.target.className.search("menu-")) {
                inputRef.current.focus();
                inputRef.current.scrollIntoView();
            } else {
                const menuCompos = event.target.className.split("-")[1];
                console.log("menuCompos", menuCompos);
                // update setOutput avec l'element récup via CallComposant
                setOutput([...output, CallComposant(menuCompos)]);
                setInput("");
            }
        }
    }

    // For caret position at the end
    useEffect(() => {
        if (inputRef.current) {
            console.log("hgvsdjhcvj");
            handleClick(event);
        }
    });

    // input Terminal
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
