import React, { useState, useRef, useEffect } from "react";
import StartTerminal from "./StartTerminal";
import HeadLineCmd from "./HeadLineCmd";
import CallComponent from "./CallComponent";
import { dataMenu } from "./GlobalVariable";
import { StyleContext } from "./GlobalVariable";
import { dataThemes } from "./GlobalVariable";
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [listHistory, setListHistory] = useState([]);
    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [posHistory, setPosHistory] = useState(0);
    const [style, setStyle] = useState({
        background: dataThemes[0].background,
        colorTextHead: dataThemes[0].colorTextHead,
        colorText: dataThemes[0].colorText,
        colorMenu: dataThemes[0].colorMenu,
    });

    // display input Terminal x seconde after load page
    setTimeout(() => {
        setIsVisible(true);
    }, 10500);

    const changeStyle = (newTheme) => {
        const getnewTheme = dataThemes.find(({ title }) => title === newTheme);
        if (getnewTheme) {
            setStyle({
                background: getnewTheme.background,
                colorTextHead: getnewTheme.colorTextHead,
                colorText: getnewTheme.colorText,
                colorMenu: getnewTheme.colorMenu,
            });
        } else {
            setOutput([...output, CallComponent(newTheme)]);
        }
    };

    // verif if press key is TAB
    // assign input if event is find in dataMenu
    const handleKeyPress = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            const getMenuCompo = dataMenu.find(({ title }) => title.startsWith(input));
            if (getMenuCompo) {
                setInput(getMenuCompo.title);
            }
        } else if (event.key === "ArrowUp") {
            if (posHistory === 0) {
                return;
            }
            setPosHistory(posHistory - 1);
            setInput(listHistory[posHistory - 1]);
        } else if (event.key === "ArrowDown") {
            if (posHistory === listHistory.length) {
                return;
            }
            setPosHistory(posHistory + 1);
            setInput(listHistory[posHistory + 1]);
        }
    };

    // submit form terminal
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input === "clear") {
            console.log("clear");
            setOutput([]);
            setListHistory([]);
            setPosHistory(0);
            setInput("");
        } else if (!input.search("themes set")) {
            changeStyle(input.split(" ")[2]);
            setListHistory([...listHistory, input]);
            setPosHistory(listHistory.length);
        } else {
            // update setOutput avec l'element récup via CallComposant
            setOutput([...output, CallComponent(input)]);
            setListHistory([...listHistory, input]);
            setPosHistory(listHistory.length);
            setInput("");
        }
    };

    function focusInput() {
        inputRef.current.focus();
        inputRef.current.scrollIntoView();
    }

    // evenement click for focus input terminal
    // create composant if elment click class = menu-
    function handleClick() {
        if (event.target.className) {
            if (!event.target.className.search("menu-")) {
                const menuCompo = event.target.className.split("-")[1];
                // update setOutput with element retrieve by CallComposant
                if (menuCompo === "clear") {
                    setOutput([]);
                    setListHistory([]);
                    setPosHistory(0);
                    setInput("");
                } else {
                    setOutput([...output, CallComponent(menuCompo)]);
                    setListHistory([...listHistory, event.target.className.split("-")[1]]);
                    setPosHistory(listHistory.length);
                    setInput("");
                }
            } else if (!event.target.className.search("theme-")) {
                changeStyle(event.target.className.split("-")[1]);
                setListHistory([...listHistory, "themes set " + event.target.className.split("-")[1]]);
                setPosHistory(listHistory.length);
            } else if (event.target.className === "div-socials") {
                navigator.clipboard.writeText("npub14gtck3r2hvg4syjncjpfsk2un5sraap2ea6gtmy9ga20f4ch0r0ssrxg3e");
            } else {
                // "menu-" not exist in class
                focusInput();
            }
        } else {
            focusInput();
        }
    }

    // For caret position at the end
    useEffect(() => {
        if (inputRef.current) {
            focusInput();
        }
    });

    // input Terminal
    const divForm = (
        <>
            <div className="div-input-terminal">
                <HeadLineCmd />
                <form id="form-terminal" onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" value={input} id="input-terminal" onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyPress} style={{ color: style.colorText }} autoComplete="off" />
                </form>
            </div>
        </>
    );

    return (
        <StyleContext.Provider value={style}>
            <div className="app" onClick={handleClick} style={{ backgroundColor: style.background, color: style.colorText }}>
                <div id="terminal">
                    <StartTerminal />
                    <div>{output}</div>

                    {/* wait end of StartTerminal and display input Terminal */}
                    {isVisible && <div>{divForm}</div>}
                </div>
            </div>
        </StyleContext.Provider>
    );
}
export default App;
