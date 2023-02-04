import React, { useEffect,  useState } from "react";
import Input from "./Input";

type Props = {
  name: string,
  onChange?: Function,
  datePicker?: any,
  img?: any,
};

const InputDate: React.FC<Props> = ({ name, onChange, datePicker, img }) => {
  const [height, setHeight] = useState<any>(0);
  useEffect(() => {
    setHeight(document.getElementById(name)?.offsetHeight)
  }, [document.getElementById(name)?.offsetHeight])
  const activeInput = ()=>{
    let a:any= document.getElementById(name);
    try {
      a.showPicker();
      a.style.color= "black"
    } catch (error) {
      window.alert(error);
    }
  }
 const setColorPlaceholder = ()=>{
  let a = document.getElementById(name)
  if(a){
    a.style.color= "black"
  }
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input onClick={setColorPlaceholder} placeholder={""} id={name} name={name} type={'date'}/>

        <img onClick={activeInput} style={{ height: height, cursor:'pointer' }} {...img} />
      </div>



    </>
  )
}

export default InputDate
