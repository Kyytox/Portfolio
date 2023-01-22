import React, { useState, useEffect } from "react";

import CallComposant from "./CallComponent";

// function who display Head / welcome / navbar when u comme on app
function StartTerminal() {
    const listInitTerminal = ["head", "headWelcome", "welcome", "menu"];
    const listTimeInterval = [2000, 2000, 4000, 1800];
    const [listStartTerminal, setListStartTerminal] = useState([]);
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);

    // we will browse the param items of the function
    // add each element to the listTerminal to add components as you go
    useEffect(() => {
        if (count >= 4) return;
        const interval = setInterval(() => {
            setListStartTerminal([...listStartTerminal, CallComposant(listInitTerminal[index])]);
            setIndex((prevIndex) => prevIndex + 1);
            setCount(count + 1);
        }, listTimeInterval[index]);
        return () => clearInterval(interval);
    }, [listInitTerminal, index, count]);

    const divListTerminal = listStartTerminal.map((data, index) => (
        <div className="item-terminal" key={"item-terminal-" + index}>
            {data}
        </div>
    ));

    return <div>{divListTerminal}</div>;
}

export default StartTerminal;
