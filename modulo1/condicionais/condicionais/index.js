// ----------------------EXERCÍCIO 1 INTERPRETAÇÃO DE CÓDIGO -------------------------

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
/* RESP a ) ta fazendo o seguinte se o resto da divisão 
for igual a zero vai imprimir que ele passou no teste.
se o resto da divisão for diferente de zero, vai imprimir
que o usuario não passou no teste.*/

/* RESP b) Os tipos de números que passarão no teste serão par
porque o resto da divisão sera zero. */

/* RESP c) Os tipos de números que não passarão no teste serão impar
pois o resto da divisão será diferente de zero. */

// --------------------- EXERCÍCIO 2 INTERPRETAÇÃO DE CÓDIGO --------------------


/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

/* RESP a) Esse código serve para saber o valor de cada fruta escolhida
ou seja, para cada fruta que o usuario escolhe a parece o preço da fruta
escolhida pelo usuario.*/

/* RESP b) O preço da fruta, Maçã, é 2.25.*/

/* RESP c) Então o break ele é utilizado para frear, parar aonde eu quero, se eu tiro o break
e o usuario quer acessar a fruta pêra, o programa rodara normalmente porém ele vai parar no break do default,
  e me dara o valor da Pêra errado imprimindo da seguinte forma
    O preço da fruta, Pêra, é 5 */

    // --------------------EXERCÍCIO 3 DE INTRERPRETAÇÃO DE CÓDIGO---------------------

  /*  const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
} 
  

console.log(mensagem)*/

/* RESP a) A priminha linha tem a variável com nome 
    numero, e apartir dai qualquer valor inserido pelo 
    usuario sera guardado dentro dessa variavel, sendo
    do tipo Number */

  /* RESP b) Se o valor digitado pelo o usuario for 10
    então numero é maior que 10, e vai imprimir a seguinte mensagem
    Esse número passou no teste.
    se for -10 ele até reconhece que número é menor que 10, porem
    não vai imprimir em lugar algum porque não tem saída para ele. sendo que para imprimir eu teria que
    usar o else if ou so o else. e ai mandaria imprimir a mensagem que eu quero caso o número seja menor que zera
    e essa mensagem seria impresso, passaria direto da minha primeira condição e entraria
    na minha segunda condição!*/

    /* RESP c) A variavel mensagem está declarada de maneira errada pois esta dentro do escopo do if
    a maneira certa de declara ela é no escopo global. da maneira que esta sendo usado, é de forma errada
    tanto é que até a cor esta apagada, sinalizando que essa sintaxe ta errada!*/

  // -------------------------- Exercícios 1 de escrita de código--------------
// RESP a,b,c)
           /* const idade = Number (prompt('Você é maior idade? Digite por gentiliza a sua idade:'))

            if( idade >= 18) {
                console.log(`Você pode dirigir`)
            } else {
                console.log(`Você não pode dirigir.`)
            }
            console.log(idade)*/
    
  //  -------------------------- Exercícios 2 de escrita de código---------------------------
  //RESP )
           /* const alunos = prompt('Qual o turno que você estuda? Matutino digite M, para Vespertino digite V, para noturno digite N')

          if (alunos === "M") {
              console.log('Bom dia!')
          } 
          else if(alunos ==="V") {
              console.log('Boa tarde!')
          } 
           else if(alunos === "N") {
               console.log('Boa noite!')
           } else {
               console.log('Se esta vendo essa mensagem é porque digitou alguma letra fora das opção, sinto muito tente mais uma vez!')
           }*/

     //  -------------------------- Exercícios 3 de escrita de código---------------------------

    /* let alunos = prompt('Qual o turno que você estuda? Matutino digite M, para Vespertino digite V, para noturno digite N')

     switch (alunos) {
         case "M":
         console.log('Bom dia')
         break
         case "V":
           console.log('Boa tarde!')
           break
           case "N":
             console.log('Boa noite!')
             break
     }*/
     

      //  -------------------------- Exercícios 4 de escrita de código---------------------------

      /*const generoFilme = prompt('Digite o  gênero do filme:')
      const valorIngresso = Number (prompt('Qual foi o valor do ingresso ?'))

      if (generoFilme === "Fantasia" && valorIngresso < 15) {
          console.log('Bom filme!')
      } else {
          console.log('Escolha outro filme!')
      }*/

    //               -------------------------- DESAFIO 1---------------------------

    /*const generoFilme = prompt('Digite o  gênero do filme:')
      const valorIngresso = Number (prompt('Qual foi o valor do ingresso ?'))

      if (generoFilme === "Fantasia" && valorIngresso < 15) {
        const lanche = {
          lancheEcolhido: prompt('Qual lanchinho vai comprar (Pipoca, Chocolate, Doces, ou entre outros?')
        }
        switch(lanche.lancheEcolhido) {
          case "Pipoca":
            console.log('Bom filme!')
            console.log('Aproveite a sua Pipoca')
            break
            case "Chocolate":
              console.log('Bom filem!')
              console.log('Aproveite o seu Chocolate')
              break
              case "Doces":
                console.log('Bom filme!')
                console.log('Aproveite o seu Doces')
                break
                default: 
                console.log('O lanche escolhido acabou')
        }
      } 
      else {
          console.log('Escolha outro filme!')
      }*/

      //               -------------------------- DESAFIO 2---------------------------


     function dadosDoClienteParaIngresso() {
       const cliente = {
         nome: prompt('Qual o seu nome completo?'),
         tipoDeJogo: prompt('Qual o tipo de jogo, sabendo que IN para (jogos Internacional) e DO para jogos (Nacional)').toUpperCase(),
        etapaDoJogo: prompt('SF pra semi fial, DT para disputa do terceiro lugar, FI para grande fianl.').toUpperCase(),
        categoria: Number(prompt('Qual a categoria de jogo que quer assistir, lembrando que são de 1 a 4')),
        quantidadeIngresso: Number(prompt('Digite a quantidade de ingresso que deseja:'))
       }
       switch(cliente.tipoDeJogo) {
         case "DO":
         console.log('Tipo de jogo: Nacional')
         break
        case "IN":
          console.log('Tipo do jogo: Internacional')
       }
       switch(cliente.etapaDoJogo) {
        case "SF":
          console.log('Etapa do jogo: Semi-final')
          break
          case "DT":
            console.log('Etapa do jogo: Terceiro lugar')
            break
            case "FI":
              console.log('Etapa do jogo: Final')
              break
              default:
                console.log('Não encontramos o tipo de jogo desejado, tente novamente!')
       }
    
     }

 

 
   

    
    