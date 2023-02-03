import { Form } from "@unform/web";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ContratoContext, UserContext } from "../App";
import Logar from "../components/functions/Logar";
import Input from "../components/input";
import PaymentHeader from "../components/PaymentHeader";
import { useNavigate } from 'react-router-dom';
import "../styles/PaymentFornecedor.scss";

const name = 'PaymentFornecedor'


export default function PaymentFornecedor() {

    const { user, setUser } = useContext(UserContext);
    const {contrato, setContrato} = useContext(ContratoContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === '') {
            navigate('/')
        }
    }, [user])

    const getUserContracts = (cnpj) => {
        const user = Logar(cnpj);
        console.log(user)
        if (user) {
            return (
                mapContractsPage(user, handleSubmit, navigate)
            );
        }
    }

    const handleSubmit = (data: number[]) => {
        if(data.length===0){
            alert('Ao menos um Contrato deverá ser selecionado')
            return
        }
        if(data.length>1){
            alert('Somente um Contrato deverá ser selecionado')
            return
        }
        if(data.length===1){
            setContrato(user.contracts[data[0]])
            navigate('/Contract')
        }

    }
    return (
        <>
            {
                getUserContracts(user.cnpj)
            }
        </>
    );
}


const mapContractsPage = (user, handleSubmit, navigate) => {

    const [selects, setSelects] = useState<any>([]);

    const changeSelect = (value) => {
        let a = selects
        let z = a.findIndex(obj =>
            obj == value
        )
        if (z === -1) {
            setSelects([...selects, value])
        }
        else {
            a.splice(z, 1)
        }
    }

    return (
        <>
        <main className={`${name}_body`}>
        <br /><br />
            <div className={`${name}_box`}>
                <PaymentHeader RazaoSocial={user.Razao_Social} NomeFantasia={user.Nome_Fantasia} Cnpj={user.cnpj} NomePagina={'Contratos Vinculados'} />
                <div className={`${name}_box_tableContainer`}>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>Nome do Contrato</td>
                                <td>Código do Contrato</td>
                                <td>Retenção Técnica</td>
                                <td>Detalhes</td>
                            </tr>
                        </thead>
                        <tbody className={`${name}_box_table_tbody`}>

                            {
                                user.contracts.map((value, index) => {
                                    return (

                                        <tr key={`contratos_${index}`} style={{ backgroundColor: index % 2 === 0 ? 'rgb(230, 230, 230)' : 'rgb(200, 200, 200)' }}>
                                            <td className={`${name}_box_table_tbody_td1`}>
                                                <input onChange={e => changeSelect(index)} type={'checkbox'} />
                                            </td>
                                            <td className={`${name}_box_table_tbody_td2`}>
                                                <p>{value.titulo}</p>
                                            </td>
                                            <td className={`${name}_box_table_tbody_td3`}>
                                                <p>{value.codigo}</p>
                                            </td>
                                            <td className={`${name}_box_table_tbody_td4`} >
                                                <p>{value.retencao}</p>
                                            </td>

                                            <td className={`${name}_box_table_tbody_td5`}>
                                                <a><img src="/icons8-magnifying-glass-64.png" /></a>
                                            </td>
                                        </tr>

                                    );
                                })
                            }


                        </tbody>

                    </table>
                </div>

                <br />
                <div className={`${name}_box_containerButtons`}>
                    <button onClick={e => navigate('/')} style={{ backgroundColor: 'rgb(252, 227, 0)' }} >Anterior</button>
                    <button onClick={e => handleSubmit(selects)} style={{ backgroundColor: 'rgb(0, 165, 36)' }}>Próximo</button>
                </div>
                <div className={`${name}_box_containerLogo`}>
                    <img className={`${name}_box_logo`} src="/logo.png" />
                    <div className={`${name}_box_containerLogo_TextContainer`}>
                        <p>@ 2022-2022 Construindo Patrimônios</p>
                    </div>
                </div>

            </div>
            <br /> <br />
        </main>
        </>
    );
}