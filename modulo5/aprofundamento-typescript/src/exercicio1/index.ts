// ------------ Exercício 1 --------------

// let minhaString:string = "Olá aqui é a minha string"
// minhaString = 50

// a) Da erro, pq a variável minhaString espera receber um valor do tipo string, se vier outro tipo
// além do que essa variável espera da erro

// ----------------------------------------------------

// let meuNumero:number = 50
// meuNumero = "olá"
// b) Da erro, pq a variável meuNumero espera um valor do tipo number, e ta chegando o valor string
// ------------------------------------------

// c) 
enum Role {
    VERMELHO = "vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE =   "Verde",
    AZUL =   "Azul"
}

    type Pessoa = {
        nome:string,
        idade:number
        role: Role
    }

    const pessoa1: object | Pessoa = {
     nome: "vitor",
     idade: 21,
     corFavorita: Role.VERMELHO
    }

    const pessoa2:object | Pessoa = {
        nome: "vinius",
        idade: 24,
        corFavorita: Role.VERDE
    }

 console.log(pessoa1, pessoa2)
 

