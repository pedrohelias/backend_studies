import { MenuModel } from "../menu/main.js";

export function EraseData(lista, idDigitado, rl){


    const index = lista.findIndex(u => u.id === idDigitado); //procura o id na lista

    if (index !== -1) {
        lista.splice(index, 1); 
        console.log("Usuário removido com sucesso!");
    } else {
        console.log("Erro: ID não encontrado.");
    }

    //console.log(JSON.stringify(lista, null, 2));
    MenuModel(lista, rl);



}