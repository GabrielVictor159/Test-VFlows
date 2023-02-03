import { Form } from "@unform/web";
import React, { useContext } from "react";
import Inputs from "../components/Inputs";
import "../styles/Login.scss";
import Input from "../components/input";
import InputMask from 'react-input-mask';
import { cnpj } from 'cpf-cnpj-validator'; 
import { UserContext } from "../App";
import Logar from "../components/functions/Logar";
import { useNavigate } from 'react-router-dom';
const name = 'Login'

export default function Login(props: any) {
    const { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();
    function handleSubmit(data: any) {
     if(cnpj.isValid(data.cnpj)){
        if(Logar(data.cnpj)){
            setUser(Logar(data.cnpj))
           navigate('/PaymentFornecedor')
        }
        else{
            alert('CNPJ sem contratos ativos')
        }
     }
     else{
        alert('cnpj invalido')
     }
    
    }
  
    return (
        <>
        
            <main className={`${name}_body`}>
            <br /><br />
                <div className={`${name}_box`}>
                    <img src={'/logo.png'} />
                    <br />
                    <h1>PAGAMENTO DE FORNECEDOR</h1>

                    <Inputs
                        container={{
                            className: `${name}_container_input`
                        }}
                        titulo={{
                            className: `${name}_titulo_input`,
                        }}
                        name={'CNPJ'} >
                        <Form onSubmit={handleSubmit} className={`${name}_Form`}>
                            <InputMask mask="99.999.999/9999-99">
                                {() => <Input name="cnpj" className={`${name}_input`} />}
                            </InputMask>
                            <br /><br />
                            <button type="submit">Acessar</button>
                        </Form>
                    </Inputs>
                    <br />
                    <br />

                </div>
            </main>
        </>
    );
}


