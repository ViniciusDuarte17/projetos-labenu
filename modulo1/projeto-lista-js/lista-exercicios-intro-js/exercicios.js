// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura:'))
  const largura = Number(prompt('Digite a largura:'))

  const area = altura * largura
  console.log(area)
   
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

      const anoAtual = Number(prompt('Digite um ano atual'))
      const anoDeNascimento= Number(prompt('Digite o ano que nasceu:'))
      
      const suaIdade = anoAtual - anoDeNascimento

      console.log(suaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?')
  const email = prompt('Digite seu melhor email:')
  console.log('Meu nome é ' + nome +', tenho '+ idade + ' anos, e o meu email é ' + email + '.')
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return string1 >= string2 

}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let array1 = array.slice()
array1[array.length -1] = array[0]
array1 [0] = array[array.length -1]
return array1 
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 return (string1 <= string2)  , string1 !== string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt('Qual é o ano atual?'))
const anoNascimento = Number(prompt('Qual o ano do seu nascimento?'))
const anoCarteiraEmitida = Number(prompt('Qual foi o ano em que sua carteira de identidade foi emitida?'))

const idade = anoAtual - anoNascimento

const checandoValidadeEmitida = anoAtual - anoCarteiraEmitida
const idade = anoAtual - anoNascimento 

const validadeRg = anoAtual - anoDeEmissaoRg 

const condicao1 = idade <= 20 || validadeRg > 5

const condicao2 = idade > 21 || idade <= 30 || validadeRg >= 10

const condicao3 = idade > validadeRg >= 15

 if (idade <= 20 && condicao1 >= 5) {
     console.log(condicao1)

 } else if(idade > 21 || idade <= 30 ){
     console.log(condicao2)

 } else if(condicao3 && idade  ) { 
    
     console.log(condicao3)
    }

}
// tentei resolver esse desafio de checar a validade do rg, mas não consegui



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
return ano%400 ==0 || ano %4 ==00 && ano %100 != 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}