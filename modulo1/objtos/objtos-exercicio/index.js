//----------------------EXERCÍCIO DE INTERPRETAÇÃO 1-----------------------

/*const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
    
}
console.log(filme.elenco[0]) // vai ser impresso, Matheus Nachtergaele 
console.log(filme.elenco.length -1) // No caso vai imprimir o ultimo elemento do meu elenco, Virginia Cavendish . ou 3
console.log(filme.transmissoesHoje [2]) // vai imprimir, {canal: "Globo", horario: "14h"}*/

// ----------------------EXERCÍCIO DE INTERPRETAÇÃO 2-----------------------
//letra a)

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //vai imprimir só a copia da constante cachorro, nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // vai imprimir a copia da constante cachorro nome: "Juca", idade: 3, raca: "SRD". agrecido nome: "Juba", mais a copia que esta na constante gato, e tambem onde tem a lentra "a" dentro da constante de gato vai ser trocado pela a letra "o"
console.log(tartaruga) // vai ser impresso o que esta na constente do gato aqui na tartaruga, e fazendo a troca onde tem o "a" troca pelo "0"*/

//letra b)
// os tres potinho literalmente faz uma copia derterminado de algum objeto específico e podemos alterar e modificar de forma que bem entendemos, sem alterar o original!

//----------------------EXERCÍCIO DE INTERPRETAÇÃO 3-----------------------

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
console.log(minhaFuncao(pessoa, "backender")) //vai imprimir um false. que justamente a posição que ele esta chamando!
console.log(minhaFuncao(pessoa,"altura") )*/ // foi impresso undefined.. esse ultimo não sei explicar o que houve, porem os de cima eu acho que sei rsrs.

// --------------------EXERCÍCIO 1 ESCRITA DE CÓDIGO-----------------------
// a)
      /* const pessoa = {
            nome: "Amanda",
            apelidos: ["Amandinha", "Mendinha", "Mandi"]
        }
        //const mostra = pessoa.nome
      // const app = pessoa.apelidos
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
//b)
        const novoPessoa = {
            ...pessoa,
           
            apelidos1:["Manda", "Mancada", "Mandica"]
            
        }

        console.log(`Eu sou ${novoPessoa.nome}, mas pode me charmar de ${novoPessoa.apelidos1[0]}, ${novoPessoa.apelidos1[1]} ou ${novoPessoa.apelidos1[2]}`)*/

     //   --------------------EXERCÍCIO 2 ESCRITA DE CÓDIGO-----------------------
//a e b)
       /* const pessoa = {
            nome: "Bruno",
            idade: 23,
            profissao: "Instrutor"
        }
        function minhafuncao (pessoa) {
           return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
        }
        console.log(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length)*/

        //   --------------------EXERCÍCIO 3 ESCRITA DE CÓDIGO-----------------------
//a)
       /*const carrinho = [] 
       const sacolao = {
           frutas0: "Mamao", disponibilidade: "true",
           frutas1: "Banana", disponibilidade: "true",
           frutas2: "Uva", disponibilidade: "true"
       }

       carrinho.push(sacolao)

console.log(carrinho)*/ //Se der um console.log de carrinhho mostrara as frutas adicionada no meu array
    
//                     --------------------DESAFIO 1 -----------------------
    
 /*const nome = prompt('Qual o seu nome?')
 const idade = prompt('Qual a sua idade?')
const profissao = prompt('Qual é a sua profissão')

const dados = {
    nome,
    idade,
    profissao
}
console.log(dados)*/

//                      --------------------DESAFIO 2 -----------------------

/*function filmes(filme1,filme2) { 
    filme1 = {
     nome:"furiosos",
    anoLacamento: 1990

    }
   filme2 = {
     nome:"furiosos",
     anoLacamento: 1990
    }
   
     return filme1.length == filme2.length 

   //filme1.length == filme2.length 

     }
     
console.log(filmes())*/ // tentei mas não consegui fazer!

//              --------------------DESAFIO 3 -----------------------


/*const filmes = {
    filmes:["Velozes e furiosos", "Jogos mortais", "De pernas pro ar"],
    personagens: "toreto", JogosMortais:"Itach", dePernasProAr: "Clarice Lispector"
}
console.log(`O nome do filme é ${filmes.filmes[0]}, e os seus personagens são ${filmes.personagens} e ${filmes.dePernasProAr}`)/*/// esse aqui era extra mesmo ta fazendo os exercíco em video a fiquei com pregruiça de abrir outro arquivo kkkk