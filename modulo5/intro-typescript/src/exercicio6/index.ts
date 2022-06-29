// -------------- Exercício 6 -----------

const operacoes = (num1: number, num2 : number) => {
    const operacao = process.argv[2]
    
    switch(operacao){
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
            console.log(div)
            break;
    }
  
}

console.log(operacoes(5, 6))