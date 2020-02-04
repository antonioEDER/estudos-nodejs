const Commander = require('commander')
const database = require('./database.js')
const Heroi = require('./heroi.js')

async function main() {
    Commander
        .version('v1')
        
        .option('-n, --nome [value]', 'Nome do heroi')
        .option('-p, --poder [value]', 'poder do heroi')
        .option('-i, --id [value]', 'poder do heroi')

        .option('-c, --cadastrar', "post do heroi")
        .option('-l, --listar', "get do heroi")
        .option('-a, --atualizar', 'update do heroi')
        .option('-r, --remover', 'delete do heroi')

        .parse(process.argv)

        const heroi = new Heroi(Commander)
    
    try {
        if (Commander.cadastrar) {
            const resultado = await database.cadastrar(heroi)
            if (!resultado) {
                return
            }
        }
        if (Commander.listar) {
            const resultado = await database.listar(heroi.id)
            if (!resultado) {
                return
            }
            console.log(resultado);
        }
        if (Commander.remover) {
            const resultado = await database.remover(heroi.id)
            if (!resultado) {
                return
            }
            console.log(resultado);
        }
        
        if (Commander.atualizar) {
            const resultado = await database.atualizar(heroi.id, heroi)
            if (!resultado) {
                return
            }
            console.log(resultado);
        }
    } catch (error) {
        console.error('Um erro', error)
    }
}

main()