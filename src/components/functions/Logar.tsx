import users from "../../controller/users.json";
export default function Logar(cnpj:string):any{
const index = users.findIndex(obj => obj.cnpj ===cnpj)
if(index ===-1){
    return false
}
else{
    return users[index]
}
}