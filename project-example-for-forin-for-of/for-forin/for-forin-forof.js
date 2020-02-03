const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('tempo-do-filter')
        result.results.filter((pessoa)=>{            
            if (result.results[result.results.length-1].name == pessoa.name) {
                return  console.timeEnd('tempo-do-filter')
            }
        });
       

        console.time('tempo-do-forEach')
        result.results.forEach(pessoa => {
            //names.push(pessoa.name) 
            if (result.results[result.results.length-1].name == pessoa.name) {
                return console.timeEnd('tempo-do-forEach')
            }
        });
        
        console.time('tempo-do-for')
        for (let index = 0; index < result.results.length; index++) {
            const pessoa = result.results[index]
            if (result.results[result.results.length-1].name == pessoa.name) {
                return
            }
            //names.push(pessoa.name)
        }
        console.timeEnd('tempo-do-for')

        // console.time('tempo-do-forIN')
        // for (const index in result.results) {
        //     const pessoa = result.results[index]
        //     if (result.results[result.results.length-1].name == pessoa.name) {
        //         return console.timeEnd('tempo-do-forIN')
        //     }
        //    // names.push(pessoa.name)
        // }
        

        console.time('tempo-do-ForOF')
        for (const pessoa of result.results) {
            if (result.results[result.results.length-1].name == pessoa.name) {
                return console.timeEnd('tempo-do-ForOF')
            }
           // names.push(pessoa.name)
        }
        


    } catch (error) {
        console.log('erro interno', error);
    }
}
main()