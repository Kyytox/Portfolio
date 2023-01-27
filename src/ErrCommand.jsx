import React from "react";
import HeadLineCmd from "./HeadLineCmd";

function ErrCommand({ error }) {
    return (
        <div className="element-terminal">
            <HeadLineCmd text={error} />
            {/* <p className="err-msg">command not found</p> */}
            <p className="err-msg">La commande n'existe pas</p>
        </div>
    );
}

export default ErrCommand;
