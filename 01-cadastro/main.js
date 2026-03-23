import { CadastroFactory } from "./cadastro/main.js";
import { ListFactory } from "./lista/main.js";

const listaCadastros = []
let user1 = CadastroFactory("Pedro", "30", "pedroheliasoriginal@gmail.com")
let user2 = CadastroFactory("Helias", "31", "pedroheliasoriginal@gmail.com")
let lista = ListFactory(user1)
ListFactory(user2)

console.log(lista)

