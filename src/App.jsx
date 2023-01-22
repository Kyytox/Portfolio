import React, { useState, useRef, useEffect } from "react";
import StartTerminal from "./startTerminal";
import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";
import { dataMenu } from "./GlobalVariable";
import "./App.css";

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
    // assign input if event is find in dataMenu
    const handleKeyPress = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            const getMenuCompo = dataMenu.find(({ title }) => title.startsWith(input));
            if (getMenuCompo) {
                setInput(getMenuCompo.title);
            }
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

    function focusInput() {
        console.log("focusInput");
        inputRef.current.focus();
        inputRef.current.scrollIntoView();
    }

    // evenement click for focus input terminal
    // create composant if elment click class = menu-
    function handleClick() {
        console.log("handleClick");
        if (event.target.className) {
            if (event.target.className.search("menu-")) {
                // "menu-" not exist in class
                focusInput();
            } else {
                const menuCompo = event.target.className.split("-")[1];
                // update setOutput avec l'element récup via CallComposant
                if (menuCompo === "clear") {
                    setOutput([]);
                    setInput("");
                } else {
                    setOutput([...output, CallComposant(menuCompo)]);
                    setInput("");
                }
            }
        } else {
            focusInput();
        }
    }

    // For caret position at the end
    useEffect(() => {
        if (inputRef.current) {
            console.log("useEffect");
            focusInput();
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
