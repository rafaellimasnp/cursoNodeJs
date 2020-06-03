const {obterPessoas} = require('./services');

Array.prototype.meuReduce = function( callback, valorinicial){
    let valorFinal = typeof valorinicial !== undefined ? valorinicial: this[0]

    for(let index = 0; index <= this.length -1; index ++) {

        valorFinal = callback(valorFinal, this[index], this)
    }

    return valorFinal

}

async function main(){
try {

    const { results } = await obterPessoas(`a`)
    const pesos = results.map(item => parseInt(item.height))
    console.log(`pesos,` , pesos)
    // const total = pesos.reduce((anterior,proximo) =>{
    //     return anterior + proximo

    // })

    console.log(` Total`, total);



    
} catch (error) {
    console.error(`DEU RUIM`,error)
}    

}

main();