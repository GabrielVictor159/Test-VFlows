import VerificarData from "./VerificarData"
const sendData = (data:any, navigate:any, files:FileList | null)=>{
    
   if(VerificarData(data)){
    console.log(data);
    if(files!==null){
    console.log(files)
    }
    alert("Solicitação 999999 foi enviada com sucesso.")
    navigate("/")
   }
}

export default sendData

