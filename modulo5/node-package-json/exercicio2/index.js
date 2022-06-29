// --------------------------- Exercício 2 ------------------------

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao) {
    case "som":
        const soma = num1 + num2
        console.log(`O resultado é : ${soma}`)
        break;

    case "sub":
        const sub = num1 - num2
        console.log(`O resultado é : ${sub}`)
        break;

    case "mul":
        const mul = num1 * num2
        console.log(`O resultado é : ${mul}`)
        break;
    case "div":
        const div = num1 / num2
        console.log(`O resultado é : ${div}`)
        break;
}
//para rodar esse script usa npm run dev1 uma string e um number