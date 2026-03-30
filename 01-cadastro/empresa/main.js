export function EnterpriseFactory(nomeEmpresa, qtdVagas, workers = []){

    if(qtdVagas < workers.length){
        throw new Error("Cadastro não válido: mais trabalhadores que vagas");
    }

    const empresa = {
        name: nomeEmpresa,
        qtdVags: qtdVagas,
        workers: workers
    }

    return empresa

}