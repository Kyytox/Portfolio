import { useState } from "react";
import reactLogo from "./assets/react.svg";

import LineCmd from "./LineCmd";
import LetterByLetterText from "./LetterByLetterText";
import HeadAsciiArt from "./HeadApp.jsx";
import NavBar from "./NavBar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <HeadAsciiArt text="KYTOX" />
            <LetterByLetterText text="Welcome on my portfolio, he is interactive but u can use terminal command" timeSpeed={50} />
            <LineCmd text="Welcome i'm Kytox, a developper" />
            <LineCmd text="Menu" />
            <NavBar />
        </div>
    );
}

export default App;
