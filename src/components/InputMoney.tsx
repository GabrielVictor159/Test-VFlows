import React, { useEffect, useState } from "react";
import Input from "./Input";

type Props = {
name:string,
rest?:any,
onChange?:Function
}
const InputMoney: React.FC<Props> = ({name, onChange,...rest})=>{
    const [valor, setValor] = useState('');
    useEffect(()=>{
        if(onChange){
        onChange(valor)
        }
    },[valor])
    const moneyMask = (value: string) => {
        
        value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
        const options = { minimumFractionDigits: 2 }
        const result = new Intl.NumberFormat('pt-BR', options).format(
          parseFloat(value) / 100
        )
           if(isNaN(parseInt(result))){
            return `R$ 0,00`
           }
        return 'R$ ' + result
      }
    return(
        <>
         <Input name={name}
                type={'text'}
                value={valor}
                onChange={e=>setValor(moneyMask(e.target.value))}
                rest={rest}
                />
                
        </>
    );
}

export default InputMoney