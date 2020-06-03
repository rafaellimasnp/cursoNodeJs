const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{


}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:clickl'
meuEmissor.on(nomeEvento, function (click){
    console.log('Um usuario clicou', click)
})



const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function (resultado) {
    console.log('resultado', resultado.toString())
})

// const stdin = process.openStdin()
// stdin.addListener('data', function(value){
//     console.log(`Voce digitou: ${value.toString().trim()}`)
// })

// meuEmissor.emit(nomeEvento,'Clicou na barra de rolagem')
// meuEmissor.emit(nomeEvento,'Clicou no OK')

// let count = 0
// setInterval(function(){
//     meuEmissor.emit(nomeEvento, 'no OK  '+ (count ++))
       

// },1000)



