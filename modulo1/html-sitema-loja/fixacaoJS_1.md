// Escreva seu código aqui
 qtdeCarrosVendidos = Number(prompt("Digite a quantidade de carros vendidos"))
    valorTotalVendas = Number(prompt("Digite o valor total de vendas"))
    let comicao = valorTotalVendas * (5/100) + 100 * qtdeCarrosVendidos
    let salarioFinal = 2000 + comicao
    alert(salarioFinal)
    return salarioFinal;
   }

calculaSalario()