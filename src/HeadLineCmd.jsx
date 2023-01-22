import React, { useContext } from "react";
import { StyleContext } from "./GlobalVariable";

function HeadLineCmd({ text }) {
    const style = useContext(StyleContext);

    return (
        <div className="line-cmd">
            <p className="index-line-cmd">
                <font color={style.colorTextHead[0]}>visitor</font>
                <font color={style.colorTextHead[1]}>@</font>
                <font color={style.colorTextHead[2]}>kytox.dev</font>
                <font color={style.colorTextHead[3]}>:~$</font>
            </p>
            {text && <p>{text}</p>}
        </div>
    );
}

export default HeadLineCmd;
