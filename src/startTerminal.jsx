import React, { useState, useEffect } from "react";

import CallComposant from "./callComposant";

// function who display Head / welcome / navbar when u comme on app
function StartTerminal() {
    const listInitTerminal = ["head", "welcome", "menu"];
    const [listStartTerminal, setListStartTerminal] = useState([]);
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);

    // we will browse the param items of the function
    // add each element to the listTerminal to add components as you go
    useEffect(() => {
        if (count >= 3) return;
        const interval = setInterval(() => {
            console.log("add in listStartTerminal");
            setListStartTerminal([...listStartTerminal, CallComposant(listInitTerminal[index])]);
            // setListStartTerminal((listStartTerminal) => [...listStartTerminal, listInitTerminal[index]]);
            setIndex((prevIndex) => prevIndex + 1);
            setCount(count + 1);
        }, 500);
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
