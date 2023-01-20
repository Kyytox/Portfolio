import React, { useState, useEffect } from "react";

import "./App.css";

import StartTerminal from "./startTerminal";
import HeadLineCmd from "./HeadLineCmd";
import NavBar from "./NavBar";
import ErrCommand from "./ErrCommand";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    setTimeout(() => {
        setIsVisible(true);
        console.log("test");
    }, 200);

    const handleSubmit = (event) => {
        event.preventDefault();

        // update setOutput avec l'element récup via verifCompos
        setOutput([...output, verifCompos(input)]);
        setInput("");
    };

    // renvoi le bon composant suivant l'input du l'user
    function verifCompos(input) {
        console.log("input", input);
        switch (input) {
            case "menu":
                return (
                    <>
                        <NavBar />
                    </>
                );
            case "skills":
                return (
                    <>
                        <Skills />
                    </>
                );
            case "projects":
                return (
                    <>
                        <Projects />
                    </>
                );
            default:
                return (
                    <>
                        <ErrCommand error={input} />
                    </>
                );
        }
    }

    const divForm = (
        <>
            <div className="div-input-terminal">
                <HeadLineCmd />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} onChange={(event) => setInput(event.target.value)} autofocus />
                </form>
            </div>
        </>
    );

    return (
        <div className="app">
            {/* <StartTerminal /> */}
            <div>{output}</div>

            {/* wait end of StartTerminal and display input Terminal */}
            {isVisible && <div>{divForm}</div>}
        </div>
    );
}
export default App;
