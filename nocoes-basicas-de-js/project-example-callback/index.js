function obterUsuario(callback) {
    setTimeout(function () {
      return callback(null, {
          id: 1,
          nome: 'Eder',
          dataNascimento: new Date ()
      }) 
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout (()=> {
        return callback(null, {
            telefone: '99995555',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout (() => {
        return callback(null, {
         rua: 'dos brasileiros',
         numero: 0   
        })
    }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('ESTA ERRADO em USUARIO, error')
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('ESTA ERRADO em TELEFONE, error')
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {

            if (error2) {
                console.error('ESTA ERRADO em TELEFONE, error')
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},${endereco.numero}
                Telefone: ${telefone.telefone}
                `)
        })
    })
})
