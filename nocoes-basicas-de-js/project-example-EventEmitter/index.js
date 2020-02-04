const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, (click)=>{
 console.log('UM CLICK', click)
})

meuEmissor.emit(nomeEvento, 'Click do robo')

const stdin = process.openStdin()

stdin.addListener('data', ((value)=>{ 
    console.log(`Voce digitou: ${value.toString().trim()}`) 
    if (value.toString().trim() === 'fechar') {
        process.abort()
    }
}))