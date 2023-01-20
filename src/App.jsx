import React, { useState } from "react";

import "./App.css";

import StartTerminal from "./startTerminal";
import HeadLineCmd from "./HeadLineCmd";
import CallComposant from "./callComposant";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    setTimeout(() => {
        setIsVisible(true);
        console.log("test");
    }, 2000);

    const handleSubmit = (event) => {
        event.preventDefault();

        // update setOutput avec l'element récup via CallComposant
        setOutput([...output, CallComposant(input)]);
        setInput("");
    };

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
