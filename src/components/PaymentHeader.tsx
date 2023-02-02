import React from "react";
import "../styles/components/PaymentHeader.scss";
const name = 'PaymentHeader';

type Props = {
    RazaoSocial: string;
    NomeFantasia: string;
    Cnpj: string;
    NomePagina: string;
};

const PaymentHeader: React.FC<Props> = ({ RazaoSocial, NomeFantasia, Cnpj, NomePagina }) => {
    return (
        <div className={`${name}_box`}>
            <div className={`${name}_box_top`}>
                <div className={`${name}_box_top_image`}>
                    <img src="/logo.png" />
                </div>
                <h1></h1>
                <div className={`${name}_box_top_tituloPage`}>
                    <h1>PAGAMENTO DE FORNECEDOR</h1>
                </div>
            </div>
            <br />
            <div className={`${name}_box_mid`}>
                <div className={`${name}_box_mid_names`}>
                    <div>
                        <p><strong>Razão Social:</strong>{`  ${RazaoSocial}`}</p>
                        <p><strong>Nome Fantasia:</strong>{`  ${NomeFantasia}`}</p>
                    </div>



                </div>
                <p><strong>CNPJ:</strong>{` ${Cnpj}`}</p>
            </div>
            <br />
            <div className={`${name}_box_bottom`}>
                <h5>{NomePagina}</h5>
            </div>
        </div>
    )
}

export default PaymentHeader