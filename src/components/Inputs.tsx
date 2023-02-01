import React from "react";
import InputMask from 'react-input-mask';
export default function Inputs({ titulo, container, children, input, name }: any) {
    return (
        <div {...container}>
            <h3 {...titulo}>{name}</h3>

            <InputMask {...input} />
            {children}
        </div>
    );
}