// ----------------Exercício 1 -------
// a) Para acessar os parâmetros passados na linha de comando do node, usa-se
//  process.argv[2] (3,4,5...)

 const nome = process.argv[2]
 const idade =  Number(process.argv[3]) 
 const novaIdade = idade + 7

 console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

//para rodar esse script usa npm run dev1 uma string e um number