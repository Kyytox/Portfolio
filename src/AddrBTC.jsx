import React from "react";
import { QRCodeSVG } from "qrcode.react";
import LnLogo from "./assets/ln.jpg";
import BtcLogo from "./assets/btc.jpg";

import HeadLineCmd from "./HeadLineCmd";

function AddrBTC() {
    const dataBitcoin = [
        {
            title: "Bitcoin",
            addr: "bc1qgpswu7r5w2pgchtffgcmhxewvz0vy0dup4jk4g",
            image: BtcLogo,
        },
        {
            title: "Lightning Network",
            addr: "lnbc1p3uky94pp5qhcaxhevj67733kwakad2r72rx24ltj6kt03enna9py7rltypmdsdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5nswx3flsxtr00lwm6ns02wexcltdzz5zsa4mznstf7wkt5as0tzq9qyyssqq34q22p0gcy3arkg8mfpt293gs55azjrg3zv98fhgtfmynn96nspvgtr4e59t4epgzp9druralz9lmg7ev00qzkge5lhy90kz35t24qqs3cxv0",
            image: LnLogo,
        },
    ];

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
