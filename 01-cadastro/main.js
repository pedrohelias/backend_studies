import { CadastroFactory } from "./cadastro/main.js";
import { ListFactory } from "./lista/main.js";
import { MenuModel } from "./menu/main.js";
import { EraseData } from "./apagar/main.js";
import { EnterpriseFactory } from "./empresa/main.js";
import { ListEnterprise } from "./listaEmpresa/main.js";

import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const listaCadastros = []
let user1 = CadastroFactory("Pedro", "30", "pedroheliasoriginal@gmail.com")
let user2 = CadastroFactory("Helias", "31", "pedroheliasoriginal@gmail.com")
let lista = ListFactory(user1)
let empresa1 = EnterpriseFactory("Empresa1", 10, lista)
let listaEmpresa = ListEnterprise(empresa1)
ListFactory(user2)
console.log(lista)

MenuModel(lista, listaEmpresa, rl);



