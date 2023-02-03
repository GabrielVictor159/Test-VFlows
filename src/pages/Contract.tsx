import React, { useContext } from "react";
import { ContratoContext, UserContext } from "../App";
import PaymentHeader from "../components/PaymentHeader";
import "../styles/Contract.scss";
import { Form } from "@unform/web";
const name = "Contract";

const Contract = () => {
  const { user, setUser } = useContext(UserContext);
  const { contrato, setContrato } = useContext(ContratoContext);
  function handleSubmit(data: any) {
    console.log(data);
  }
  return (
    <>
      <main className={`${name}_body`}>
        <br />
        <br />
        <div className={`${name}_box`}>
          <PaymentHeader
            RazaoSocial={user.Razao_Social}
            NomeFantasia={user.Nome_Fantasia}
            Cnpj={user.cnpj}
            NomePagina={"Dados da Nota Fiscal"}
          />
          <br />
          <Form onSubmit={handleSubmit} className={`${name}_box_formContainer`}>
            <div className={`${name}_box_formContainer_division1`}>
              <div>
                <p>
                  <strong>Código do Contrato: </strong>
                  {contrato.codigo}
                </p>
              </div>
              <div>
                <p>{contrato.titulo}</p>
              </div>
              <div />
            </div>
            <div className={`${name}_box_formContainer_division2`}>
                
            </div>
          </Form>
        </div>

        <br />
        <br />
      </main>
    </>
  );
};

export default Contract;
