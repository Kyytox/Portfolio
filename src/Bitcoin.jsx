import React from "react";
import { QRCodeSVG } from "qrcode.react";

import HeadLineCmd from "./HeadLineCmd";

function Bitcoin() {
    const dataBitcoin = [
        { title: "Bitcoin", addr: "https://twitter.com/Kytox_" },
        { title: "Lightning Network", addr: "https://github.com/Kyytox" },
    ];

    const listBitcoin = dataBitcoin.map((data) => (
        <div className="item-socials" key={data.title}>
            <span>{data.title}</span>
            <QRCodeSVG
                value={data.addr}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                    src: "https://avatars.githubusercontent.com/u/96888096?s=400&u=b2dfb1bc6c1ad62be52d9b7a1c7362f46b5f0067&v=4",
                    x: undefined,
                    y: undefined,
                    height: 22,
                    width: 22,
                    excavate: true,
                }}
            />
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="socials" />
            </div>
            <div className="div-socials">{listBitcoin}</div>
        </div>
    );
}

export default Bitcoin;
