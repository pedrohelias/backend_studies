import { MenuModel } from "../menu/main.js";
export function ChangeData(lista, idDigitado, rl){


    const index = lista.findIndex(u => u.id === idDigitado); //procura o id na lista
    rl.question('O que você quer alterar?: \n1: Nome \n2: Idade \n3: E-mail\n', (sumario) => {
        let newId = parseInt(sumario)

        switch (sumario.trim()) {
            case "1":
                rl.question('Digite a nova informação: ', (newInfo) => {
                    lista[index]["nome"] = newInfo;
                    MenuModel(lista, rl);
                })
                break;
            case "2":
                rl.question('Digite a nova informação: ', (newInfo) => {
                    console.log("O dado lido" + newInfo)
                    lista[index]["idade"] = newInfo;
                    MenuModel(lista, rl);
                })

                break;
            case "3":
                rl.question('Digite a nova informação: ', (newInfo) => {
                    lista[index]["email"] = newInfo;
                    MenuModel(lista, rl);
                })

                break;
            default: 
                console.log("Opção inválida");
                MenuModel(lista, rl);
                break;

        }


    })
    


    //console.log(JSON.stringify(lista, null, 2));


}