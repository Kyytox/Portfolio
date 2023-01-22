import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { dataBitcoin } from "./GlobalVariable";

import HeadLineCmd from "./HeadLineCmd";

function AddrBTC() {
    const listBitcoin = dataBitcoin.map((data) => (
        <div className="item-btc" key={data.title}>
            <span>
                <img src={data.image}></img>
                <p>{data.title}</p>
            </span>
            <QRCodeSVG
                value={data.addr}
                size={230}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"Q"}
                includeMargin={true}
                imageSettings={{
                    src: data.image,
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                }}
            />
        </div>
    ));

    return (
        <div className="element-terminal">
            <div className="div-input-terminal">
                <HeadLineCmd text="bitcoin" />
            </div>
            <div className="div-bitcoin">{listBitcoin}</div>
        </div>
    );
}
export default AddrBTC;
