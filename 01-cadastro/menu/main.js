import { CadastroFactory } from "../cadastro/main.js";
import { ListFactory } from "../lista/main.js";
import { EraseData } from "../apagar/main.js";
import { ChangeData } from "../alterar/main.js";
import { EnterpriseFactory } from "../empresa/main.js";
import { ListEnterprise } from "../listaEmpresa/main.js";

export function MenuModel(lista, listaempresa, rl) { 
    console.log("\nMENU");
    console.log("1 - Add usuário");
    console.log("2 - Listar os usuários");
    console.log("3 - Apagar usuário");
    console.log("4 - Alterar Dados do usuário");
    console.log("5 - Adicionar Empresa");
    console.log("6 - Listar Empresas");
    console.log("7 - Sair");

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
                            MenuModel(lista, listaempresa, rl); 
                        });
                    });
                });
                break;
            case "2":
                console.log(JSON.stringify(lista, null, 2))
                MenuModel(lista,listaempresa, rl); 
                break;
            case "3":
                rl.question('Digite o id: ', (id) => {
                    let newId = parseInt(id)
                    EraseData(lista, newId, rl)
                });
                break;
            case "4":
                rl.question('Digite o id do objeto que você quer alterar: ', (id) => {
                    let newId = parseInt(id)
                    ChangeData(lista, newId, rl)
                });
                break;
            case "5":
                rl.question('Digite o nome da Empresa: ', (nomeEmpresa) => {
                    rl.question('Digite a quantidade de Vagas: ', (vagas) => {
                        let empresa = EnterpriseFactory(nomeEmpresa, vagas, lista);
                        ListEnterprise(empresa);
                        console.log("Cadastro da empresa realizado!");
                        console.log(JSON.stringify(listaempresa, null, 2));
                        MenuModel(lista, listaempresa, rl); 
                        
                    });
                });
                break;
            case "6":
                console.log(JSON.stringify(listaempresa, null, 2))
                MenuModel(lista,listaempresa, rl); 
                break;
            case "7":
                rl.close();
                break;
            default:
                MenuModel(lista, listaempresa, rl);
                break;
        }
    });
}