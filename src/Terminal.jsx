import React, { useState } from "react";

import LineCmd from "./LineCmd";
import HeadAsciiArt from "./HeadAsciiArt.jsx";
import NavBar from "./NavBar";
import HeadLineCmd from "./HeadLineCmd";
import "./App.css";

function Terminal({ command }) {
    const [displayTerminal, setDisplayTerminal] = useState("");

    React.useEffect(() => {
        switch (command) {
            case "head":
                return setDisplayTerminal(
                    <>
                        <HeadAsciiArt text="KYTOX" />
                    </>
                );
            case "welcome":
                return setDisplayTerminal(
                    <div className="div-input-terminal">
                        <HeadLineCmd />
                        <LineCmd text="Welcome I'm Kytox, a developper" />
                    </div>
                );
            case "navbar":
                return setDisplayTerminal(
                    <>
                        <NavBar />
                    </>
                );
        }
    }, []);

    return <div className="">{displayTerminal}</div>;
}

export default Terminal;
