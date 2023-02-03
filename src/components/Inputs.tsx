import React from "react";
export default function Inputs({ titulo, container, children, name }: any) {
    return (
        <div {...container}>
            <h3 {...titulo}>{name}</h3>
            <div>
            {children}
            </div>
        </div>
    );
}