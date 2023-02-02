import { Form } from "@unform/web";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import Logar from "../components/functions/Logar";
import Input from "../components/input";
import PaymentHeader from "../components/PaymentHeader";
import { useNavigate } from 'react-router-dom';
import "../styles/PaymentFornecedor.scss";
const name = 'PaymentFornecedor'
export default function PaymentFornecedor(props: any) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user===''){
        navigate('/')
        }
    },[user])
    const getUserContracts = (cnpj) => {
        const user = Logar(cnpj);
        console.log(user)
        if (user) {
            return (
               mapContractsPage(user, handleSubmit)
            );
        }
    }
    const handleSubmit = (data: any) => {
        console.log(data)

    }
    return (
        <>
            {
                getUserContracts(user.cnpj)
            }
        </>
    );
}


const mapContractsPage = (user, handleSubmit)=>{
    return(
        <main className={`${name}_body`}>
        <div className={`${name}_box`}>
            <PaymentHeader RazaoSocial={user.Razao_Social} NomeFantasia={user.Nome_Fantasia} Cnpj={user.cnpj} NomePagina={'Contratos Vinculados'} />
            <Form onSubmit={handleSubmit}>
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
                                    <>
                                        <tr key={`contratos_${index}`} style={{ backgroundColor: index % 2 === 0 ? 'rgb(230, 230, 230)' : 'rgb(200, 200, 200)' }}>
                                            <td className={`${name}_box_table_tbody_td1`}>
                                                <Input name={`checkbox_${index}`} value={true} type={'checkbox'} />
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
                                                <a></a>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })
                        }


                    </tbody>
                    <tfoot>
                        <button type="submit">submit</button>
                    </tfoot>
                </table>
            </Form>
        </div>
    </main>
    );
}