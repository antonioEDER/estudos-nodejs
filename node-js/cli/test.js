const { 
    deepEqual, 
    ok
} = require('assert')

const database = require('./database.js')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Fash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.atualizar(DEFAULT_ITEM_CADASTRAR.id,)
    })
    it('GET HEROIS', async () => {
        const expect = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expect.id)
        deepEqual(resultado, expect)
    })

    it('POST HEROIS', async () => {
        const expect = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(expect)
        const [actual] = await database.listar(expect.id)

        deepEqual(actual, expect)
    })

    it('DELETE HEROIS', async () => {
        const expect = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(resultado, expect)
    })

    it.only('UPDATE HEROIS', async () => {
        const expect = {
            ...DEFAULT_ITEM_CADASTRAR,
            nome: 'Batman',
            poder: 'Robin'
        }

        const novoDado = {
            nome: 'Batman',
            poder: 'Robin'
        }

        await database.atualizar(DEFAULT_ITEM_CADASTRAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(resultado, expect)
    })
})
