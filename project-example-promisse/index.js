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

obterUsuario().then((resultado)=>{
    console.log('resultado ==', resultado)
    obterEndereco().then((resultado)=>{
        console.log('resultado ==', resultado)
        obterTelefone().then((resultado)=>{
            console.log('resultado ==', resultado)
        })
    })
})

