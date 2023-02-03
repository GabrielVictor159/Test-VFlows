export default function VerificarData(data:any){
    if(data.Numero_Nota===""){
        alert("Número da Nota Obrigatório")
        return
    }
    if(data.Data_Emissao==="" || isValidDate(data.Data_Emissao)===false){
        alert("Data de Emissão Obrigatório")
        return
    }
    if(data.Data_Vencimento==="" || isValidDate(data.Data_Vencimento)===false){
        alert("Data de Vencimento Obrigatório")
        return
    }
    if(data.Valor ==="" || data.valor === "R$ 0,00" ){
        alert("Valor Obrigatório")
        return
    }
    if(data.ISSQN !=="" && data.ISSQN === "R$ 0,00"){
        alert("ISSQN deve ser maior que zero")
        return
    }
    if(data.IRRF !=="" && data.IRRF === "R$ 0,00"){
        alert("IRRF deve ser maior que zero")
        return
    }
    if(data.CSLL !=="" && data.CSLL === "R$ 0,00"){
        alert("CSLL deve ser maior que zero")
        return
    }
    if(data.COFINS !=="" && data.COFINS === "R$ 0,00"){
        alert("COFINS deve ser maior que zero")
        return
    }
    if(data.INSS !=="" && data.INSS === "R$ 0,00"){
        alert("INSS deve ser maior que zero")
        return
    }
    if(data.PIS !=="" && data.PIS === "R$ 0,00"){
        alert("PIS deve ser maior que zero")
        return
    }
    return true
}
function isValidDate(date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    
    const parts = date.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    
    if (year < 1000 || year > 9999 || month == 0 || month > 12) return false;
    
    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if (year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) monthLength[1] = 29;
    
    return day > 0 && day <= monthLength[month - 1];
}
