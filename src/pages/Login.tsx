import React, { useState } from "react";
import Inputs from "../components/Inputs";
import "../styles/Login.scss";
const name = 'Login'
export default function Login(props: any) {
    const [cnpj, setCnpj] = useState('');


    return (
        <>
            <main className={`${name}_body`}>
                <div className={`${name}_box`}>
                    <img src={'/logo.png'} />
                    <br />
                    <h1>PAGAMENTO DE FORNECEDOR</h1>
                    <Inputs
                        titulo={{
                            className: `${name}_titulo_input`,
                        }}
                        input={{
                            type: 'text',
                            mask: "99.999.999/9999-99",
                            onChange: e => { setCnpj(e.target.value) },
                            className: `${name}_input`
                        }}
                        name={'CNPJ'} />
                    <br />
                    <br />
                    <button>
                        Acessar
                    </button>
                </div>
            </main>
        </>
    );
}