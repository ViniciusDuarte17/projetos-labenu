//        1  ---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO ----
/*let valor = 0
for(let i = 0; i < 5; i++) {
    valor +=i
}
console.log(valor) 

/* vai imprimir 10 porque vai somar o valor= valor + i que ta
valendo 5, exemplo do que ta acontecendo por baixo do pano
1 + 2 + 3 + 4 */

//       2  ---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO ----

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista)   {
  if(numero > 18) {

    console.log(numero) 
  }
}*/

//a) Vai imprimir os números maiores de 18 como 19, 21, 23, 25, 27, 30

/* b) sim so precisaria for (let numero of lista) e da um console.log(numero), que 
listaria dos os numero de const lista, ou de qualquer array */

//       3  ---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO ----

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) 
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */

/* Se a quantidade total for 4, o código ler da seguinte forma: Enquanto 
a quantidade atual for menor que quantidade total, o programa vai se repetindo.
e isso também se aplica aos asteriscos enquanto ele for menor que a quantidade atual
ele tara dentro de um laço. vai repetindo e colocando um asterisco dentro da variavél linha
repetiu uma vez ele coloca um asterisco, repetiu mais outra ves, adiona mais dois asteristico. quando o caso de asteriscos e quantidadeAtual for false
que nesse caso quando ele der 4 voltas ira para de rodar, porém todas as vezes que ele rodou foi adicionando 
asterisca na linha, adiciou um, depois uma e duas, e depois uma duas e três e parou quando foi adicionado: uma e duas e três e quatro totalizando 10 asteristico
totalizando a soma igual 10, se o usuario colocasse 6 seria linha seria igual 21... E se colocar um V não ira 
imprimir uma boa tarde!!*/


//              ----- 1 EXERCÍCIO DE ESCRITA DE CÓDIGO -----

// a, b c ) tudo em baixo

/* const binchinhoUsuario = Number(prompt('Quantos binchinhos você tem?'))
let valor = 0

if(binchinhoUsuario === 0) {
  console.log('Que pena! Você pode adotar um pet!')
}

while(valor < binchinhoUsuario) {
const nomePet = prompt('Digite o nome do pet. Se tiver mais de um, digite os nome dele:')
nomePet ['']
valor++
console.log(nomePet)
}  */


//                  ----- 2 EXERCÍCIO DE ESCRITA DE CÓDIGO -----


// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let numero of arrayOriginal){
//   console.log(numero)
// }
// for(let numero of arrayOriginal) {
//   console.log(numero % 10)
// }
// for(let numero of arrayOriginal) {
//   if( numero % 2 === 0) {
//     console.log('É par', numero)
//   }
// }


// for(let numero of arrayOriginal) {
//   console.log(numero % 10)
// }
// for(let numero of arrayOriginal) {
//   if( numero % 2 === 0) {
//     console.log('É par', numero)
//   }
// }

// d)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55,99]

/*let string = []

let valor = []

for(valor = 0; valor < arrayOriginal.length; valor++){
  string.push(`O elemento do índex é ${valor} é ${arrayOriginal[valor]} `)
}
console.log( string) */

// e)
/*function encontrarMaior(array) {
  let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    if (elemento > maiorNumero) {
      maiorNumero = elemento;
    }
  }

  return maiorNumero
}
const resultado = encontrarMaior(arrayOriginal)
console.log(resultado)



function encontrarMenor(array1) {
  let menorNumero = Infinity

  for(let i = 0; i < array1.length; i++) {
    let item = array1[i];
    if(item <  menorNumero) {
      menorNumero = item;
    }
    
  }
  return menorNumero
}
const resultado1 = encontrarMenor(arrayOriginal)
console.log(resultado1)

console.log(`O maior número é ${resultado} e o menor é ${resultado1}`)*/

//          ----- 1 DESAFIO-----

const pensou = Number (prompt('Pense e digite o número que deseja:'))

prompt('Vamos jogar!')

let sorte = Number(prompt('Se acerta o número que o primeiro usuário digitou, ganha um prêmio de 1.000000,00 R$'))

function sorteando() {
let valor = pensou;

for(i = 0; i < valor; i++ ) {
  
  if(pensou > sorte) {
    prompt('Esse valor ta baixo, Digite um maior')
  } else if(pensou < sorte) {
    prompt('Esse valor ta alta jovem, digite um menor')
  } else{
    prompt (`Você ganhou, Parabèns, o primeiro número digita foi ${pensou} seu numero de tentativas é ${i}`)
  }
  
} 
return sorteando
}
console.log(pensou)
console.log(sorteando(pensou,sorte, valor))


