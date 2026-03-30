import { EnterpriseFactory } from "./empresa/main.js";
import { ListEnterprise } from "./listaEmpresa/main.js";

//let listaEmpresas = []


const trabalhadores = [
  {
    "id": 5830,
    "nome": "Pedro",
    "idade": "30",
    "email": "pedroheliasoriginal@gmail.com"
  },
  {
    "id": 3599,
    "nome": "Helias",
    "idade": "31",
    "email": "pedroheliasoriginal@gmail.com"
  },
  {
    "id": 5678,
    "nome": "Carlos",
    "idade": "20",
    "email": "pedroheliasoriginal@gmail.com"
  }
]



let empresas = EnterpriseFactory("Empresa1", 10, trabalhadores)


let lista = ListEnterprise(empresas)

for(let i = 0; i <= 3; i++){
    let enterprise = EnterpriseFactory("teste1", 10, trabalhadores)
    ListEnterprise(enterprise)
}


console.log(JSON.stringify(lista, null, 2));
