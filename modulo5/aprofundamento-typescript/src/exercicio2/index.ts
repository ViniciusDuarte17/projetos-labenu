// -------------- Exercício 2 ---------------
const array: number [] = [1,2,3,45,5,18,25,0,50, 27,36]
// console.log(array)
type Saida = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Saida {

    const numerosOrdenados = numeros.sort(
        (a:number , b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// console.log(obterEstatisticas(array))

//  A entrada é um array de números, e a saída é um objeto com as estatistica de maior número, do menor número 
// e a média de todos os números

type amostra = {
    numeros: number [],
    obterEstatisticas(numeros: number[]): Saida
}
