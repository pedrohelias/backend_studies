//const listaCadastros = []


export function CadastroFactory(nomeUser, idadeUser, emailUser){


    //const listaCadastros = []

    const usuario = {
        id: Math.floor(Math.random() * 10000),
        nome: nomeUser, 
        idade: idadeUser,
        email: emailUser 
    }


    //listaCadastros.push(usuario)

    return usuario
    


}


