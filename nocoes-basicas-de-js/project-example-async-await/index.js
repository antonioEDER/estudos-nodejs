function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Eder',
                dataNascimento: new Date()
            })
        }, 1000)
    });
}

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'dos brasileiros',
                numero: 0
            })
        }, 2000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '99995555',
                ddd: 11
            })
        }, 2000);
    })
}


main()

async function main() {
    try {
       console.time('medida-tempo-execucao')

       const usuario = await obterUsuario()
       const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEndereco(usuario.id),
       ])

       console.timeEnd('medida-tempo-execucao')
    } catch (error) {
        
    }
}
