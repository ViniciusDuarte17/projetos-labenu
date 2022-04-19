// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arr = array.sort( (a, b) => {
     return a - b;
  })
return arr
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arr = array.filter ( (array) => {
       if(array % 2 === 0) {
          return array;
       }
    })
    return arr
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
const arrPares = array.filter( (par) => {

   if(par % 2 === 0) {
      let elevado = []
      for(let i = 0; i < par.length ; i++) {

           par.length.push(elevado)
      }
      return elevado;
   }
}).map((elevado) => {
      return elevado ** 2
})
return arrPares
   
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maior = 0;
   for(let i = 0; i < array.length; i++) {
       if(array[i] > maior) {
           maior = array[i];
       }

   }
   return maior

}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const maiorNumero = Math.max(num1, num2);
const menorNumero = Math.min(num1, num2);
 
const objeto = {
   maiorNumero: maiorNumero,
   maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
   diferenca : maiorNumero - menorNumero
}
   return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroPar = []
   for(let i = 0; numeroPar.length < n; i++) {
       if(i % 2 === 0){
           numeroPar.push(i)
       }
   }
   return numeroPar

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
      return "Escaleno"
  }
  else if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
      return "Equilátero"
  }
  else if(ladoA !== ladoB && ladoB !== ladoC && ladoA === ladoC || ladoA === ladoB || ladoB === ladoC) {
      return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
   let maior = -Infinity;
   let segundoMaior = 0;

   let menor = Infinity;
   let segundoMenor = Infinity;

   for(let i = 0; i < array.length; i++){
   // pegando segundo maior
       if(array[i] > maior){
           segundoMaior = maior
           maior = array[i];
       }
       if(array[i] < maior && array[i] > segundoMaior) {
           segundoMaior = array[i]
       }
// Pegando segundo menor
       if(array[i] < menor){
           segundoMenor = menor;
           menor = array[i];
       }
       if(array[i] > menor &&  array[i] < segundoMenor) {
           segundoMenor = array[i]
       }
   }
   return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
      ...pessoa,
      nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

   const pessoaAutorizada = pessoas.filter( (pess) =>{
      return pess.altura >= 1.5 && pess.idade > 14 && pess.idade < 60
   })
  
   return   pessoaAutorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const pessoaNaoAutorizada = pessoas.filter( (pros) => {
      return pros.altura < 1.5 || pros.idade <=14 || pros.idade >= 60
   })
   return pessoaNaoAutorizada
   
   }  

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   const contaAtualizada = contas.reduce( (prod) => {
      return {...prod, compras: prod.saldoTotal - prod.compras} 
   })
   return contaAtualizada
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort( (a, b) => {
     return a.nome.localeCompare(b.nome)
  })
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   consultas.sort( (a, b) => {
      return a.dataDaConsulta > b.dataDaConsulta
   })
}