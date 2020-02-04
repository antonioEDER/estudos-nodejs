const { readFile, writeFile } = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivos(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async atualizar(id, modificar) {
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))

        if (indice === -1) {
            throw Error('Heroi não encontrado')
        }

        const atual = dados[indice]
        const objAtualizar = {
            ...atual,
            ...modificar
        }
        dados.splice(indice, 1)

        return await this.escreverArquivos([
            ...dados,
            objAtualizar
        ])
    }

    async remover(id) {
        if (!id) {
            return this.escreverArquivos([])
        }

        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('Heroi não encontrado')
        }

        dados.splice(indice, 1)
        return await this.escreverArquivos(dados)
    }

    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo();
        //workaround para simular um id
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiComId = {
          ...heroi,
          id,
        };
    
        return await this.escreverArquivos([...dados, heroiComId]);
    }

    async listar(id) {        
        const dados = await this.obterDadosArquivo()
        return dados.filter(item => (id ? item.id === parseInt(id) : true))
    }
}

module.exports = new Database