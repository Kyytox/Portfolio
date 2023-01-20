import React from "react";
import HeadLineCmd from "./HeadLineCmd";

function ErrCommand({ error }) {
    return (
        <div className="element-terminal">
            <HeadLineCmd text={error} />
            <p>command not exist</p>
        </div>
    );
}

export default ErrCommand;
