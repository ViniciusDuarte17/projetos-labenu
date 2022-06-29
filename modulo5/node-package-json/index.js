// ----------------Exercício 1 -------
// a) Para acessar os parâmetros passados na linha de comando do node, usa-se
//  process.argv[2] (3,4,5...)

// b)

//  const nome = process.argv[2]
//  const idade =  Number(process.argv[3]) 
//  const novaIdade = idade + 7

//  console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
// letra c)
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

// --------------------------- Exercício 2 ------------------------

// const operacao = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch (operacao) {
//     case "soma":
//         const soma = num1 + num2
//         console.log(`O resultado é : ${soma}`)
//         break;

//     case "sub":
//         const sub = num1 - num2
//         console.log(`O resultado é : ${sub}`)
//         break;

//     case "mul":
//         const mul = num1 * num2
//         console.log(`O resultado é : ${mul}`)
//         break;
//     case "div":
//         const div = num1 / num2
//         console.log(`O resultado é : ${div}`)
//         break;
// }

// lembrete vai descomentando exercício por exercício pra não da conflito com os itens que estão no process

// ---------------------- Exercício 3 -----------------

//  const adicionarTarefas = () => {
//     const tarefaz = []
//     tarefaz.push(process.argv[2])
//     console.log("tarefa adicionada com sucesso")
//     console.log(tarefaz)
//  }

//  adicionarTarefas();


 

