import { CadastroFactory } from "../cadastro/main.js";
import { ListFactory } from "../lista/main.js";
import { EraseData } from "../apagar/main.js";
export function MenuModel(lista, rl) { 
    console.log("\nMENU");
    console.log("1 - Add usuário");
    console.log("2 - Listar os usuários");
    console.log("3 - Apagar usuário");
    console.log("4 - Sair");

    rl.question('Digite um número: ', (numero) => {
        switch (numero.trim()) {
            case "1":
                rl.question('Digite o nome: ', (nome) => {
                    rl.question('Digite a idade: ', (idade) => {
                        rl.question('Digite o email: ', (email) => {
                            let user = CadastroFactory(nome, idade, email);
                            ListFactory(user);
                            console.log("Cadastro realizado!");
                            console.log(JSON.stringify(lista, null, 2));
                            MenuModel(lista, rl); 
                        });
                    });
                });
                break;
            case "2":
                console.log(JSON.stringify(lista, null, 2))
                MenuModel(lista, rl); 
                break;
            case "3":
                rl.question('Digite o id: ', (id) => {
                    let newId = parseInt(id)
                    EraseData(lista, newId, rl)
                });
                break;
            case "4":
                rl.close();
                break;
            default:
                MenuModel(lista, rl);
                break;
        }
    });
}