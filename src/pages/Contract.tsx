import React, { useContext, useEffect, useState } from "react";
import { ContratoContext, UserContext } from "../App";
import PaymentHeader from "../components/PaymentHeader";
import "../styles/Contract.scss";
import { Form } from "@unform/web";
import Inputs from "../components/Inputs";
import Input from "../components/Input";
import InputMask from 'react-input-mask';
import InputDate from "../components/InputDate";
import InputMoney from "../components/InputMoney";
import { useNavigate } from 'react-router-dom';
import FileInput from "../components/FileInput";
import RetentionCalc from "../components/functions/RetentionCalc";
import sendData from "../components/functions/sendData";
const name = "Contract";

const Contract = () => {
  const { user, setUser } = useContext(UserContext);
  const { contrato, setContrato } = useContext(ContratoContext);
  const [valor, setValor] = useState<any>('0')
  const [retencaoImpostos, setRetencaoImpostos] = useState<boolean>(false);
  const [retencaoTecnica, setRetencaoTecnica] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  let navigate = useNavigate();

  useEffect(() => {
    if (user === '' || contrato === '') {
      navigate('/')
    }
  }, [user, contrato])


  function handleSubmit(data: any) {
  data.Numero_Nota = data.Numero_Nota.replace(/\./g, '').replace(/\_/g, '')
  sendData(data, navigate, selectedFiles)
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
              <Inputs
                name={'Número da Nota'} >
                <InputMask mask={"9999.9999.9999.9999.9999.9999.9999.9999.9999.9999"}>
                  {() => <Input name={"Numero_Nota"} />}
                </InputMask>

              </Inputs>
              <Inputs
                name={'Data de Emissão'} >
                <InputDate
                  name="Data_Emissao"
                  img={{
                    src: "/icons8-calendar-100.png"
                  }}
                />
              </Inputs>
              <Inputs
                name={'Data de Vencimento'} >
                <InputDate
                  name="Data_Vencimento"
                  img={{
                    src: "/icons8-calendar-100.png"
                  }}
                />
              </Inputs>
              <Inputs
                name={'Valor'} >

                <InputMoney
                  name="Valor"
                  onChange={setValor}

                />
              </Inputs>
            </div>
            <br />
            <div className={`${name}_box_formContainer_division3`}>
              <input type={'checkbox'} onChange={e => setRetencaoImpostos(e.target.checked)} />
              <p>Retenção de Impostos</p>
            </div>
            {
              retencaoImpostos && (
                <div className={`${name}_box_formContainer_division4`}>
                  <div className={`${name}_box_formContainer_division4_titulo`}>Dados</div>
                  <div className={`${name}_box_formContainer_division4_boxInputs`}>
                    <Inputs
                      name={'ISSQN'}
                    >
                      <InputMoney
                        name="ISSQN"
                      />
                    </Inputs>
                    <Inputs
                      name={'IRRF'}
                    >
                      <InputMoney
                        name="IRRF"
                      />
                    </Inputs>
                    <Inputs
                      name={'CSLL'}
                    >
                      <InputMoney
                        name="CSLL"
                      />
                    </Inputs>
                    <Inputs
                      name={'COFINS'}
                    >
                      <InputMoney
                        name="COFINS"
                      />
                    </Inputs>
                    <Inputs
                      name={'INSS'}
                    >
                      <InputMoney
                        name="INSS"
                      />
                    </Inputs>
                    <Inputs
                      name={'PIS'}
                    >
                      <InputMoney
                        name="PIS"
                      />
                    </Inputs>
                  </div>
                </div>
              )

            }
            <br /><br /><br />
            <div className={`${name}_box_formContainer_division3`}>
              <input type={'checkbox'} onChange={e => setRetencaoTecnica(e.target.checked)} />
              <p>Retenção Técnica</p>
            </div>
            {
              retencaoTecnica && (
                <div className={`${name}_box_formContainer_division5`}>
                  <div className={`${name}_box_formContainer_division5_titulo`}>Dados</div>
                  <div className={`${name}_box_formContainer_division5_boxInputs`}>
                    <Inputs
                      name={"Valor"}
                    >
                      <Input
                        name={'Retencao_Valor'}
                        value={RetentionCalc(valor, contrato.retencao)}
                        readOnly
                      />
                    </Inputs>
                    <Inputs
                      name={"Percentual"}
                    >
                      <Input name={'Retencao_Percentual'} value={contrato.retencao.replace("%", "")} readOnly />
                    </Inputs>
                  </div>
                </div>
              )
            }
            <br />
            <div className={`${name}_box_formContainer_division6`}>
              <FileInput files={selectedFiles} setFiles={setSelectedFiles} buttonName={'Anexar Nota Fiscal'}
                iconRemove={{
                  src: '/icons8-remove-100.png',
                }} />
            </div>
            <div className={`${name}_box_formContainer_division7`}>
              <button onClick={e=>navigate("/PaymentFornecedor")} style={{backgroundColor:'#EDA701'}}>Anterior</button>
              <button type="submit" style={{backgroundColor:'#007E1B'}}>Próximo</button>
            </div>
            <br />
          </Form>
          <div className={`${name}_box_footer`}>
            <img src="/logo.png"/>
            <div>
            <p>@ 2022-2022 Construindo Patrimônios</p>
            </div>
          </div>
          <br />
        </div>

        <br />
        <br />
      </main>
    </>
  );
};

export default Contract;
