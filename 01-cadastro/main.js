import { CadastroFactory } from "./cadastro/main.js";
import { ListFactory } from "./lista/main.js";
import * as readline from 'readline';

let resposta = 1

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const listaCadastros = []
let user1 = CadastroFactory("Pedro", "30", "pedroheliasoriginal@gmail.com")
let user2 = CadastroFactory("Helias", "31", "pedroheliasoriginal@gmail.com")
let lista = ListFactory(user1)
ListFactory(user2)

//console.log(lista)
function exibirMenu(){
console.log("")
console.log("MENU")
console.log("1 - Add usuário")
console.log("2 - Listar os usuários")
rl.question('Digite um número: ', (input) => {
  let numero = input; 
  console.log("Você digitou:", numero);

    switch (numero){
        case "1":
            rl.question('Digite o nome: ', (nome) => {
                let nomeInput  = nome
                rl.question('Digite a idade: ', (idade) => {
                    let idadeInput = idade
                    rl.question('Digite o email: ', (email) => {
                        let emailInput = email
                        let user = CadastroFactory(nomeInput, idadeInput, emailInput)
                        ListFactory(user)
                        console.log("cadastro realizado!")
                        console.log(JSON.stringify(lista, null, 2))
                        exibirMenu()

                    });
                });
            });
            
            break;
        case "2":
            console.log(JSON.stringify(lista, null, 2))
            exibirMenu()
            break;
         case "3":
            console.log("saindo!")
            rl.close()
            break;
        default:
            exibirMenu()
            break;
    }


});

}

exibirMenu()