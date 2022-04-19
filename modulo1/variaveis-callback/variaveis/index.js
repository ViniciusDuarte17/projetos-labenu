//---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 1 -----

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  // a)
//   const novoArrayA = usuarios.map((item, index,array) => {
//      console.log(item, index, array)
//   }) //Vai ser impresso tudo que estar dentro do array
    // usuarios. da chaves nome, e chaves apelido

//---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 2 -----

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB) // const novoArrayB ta recebendo um novo
    // array que de objecto. e vai retornar somente o que está na chave nome
    // Amanda Rangel, Laís Petra, Letícia chijo

    //---- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 3 -----

    // const usuarios = [
    //     { nome: "Amanda Rangel", apelido: "Mandi" },
    //     { nome: "Laís Petra", apelido: "Laura" },
    //     { nome: "Letícia Chijo", apelido: "Chijo" },
    //   ]
      
    //   const novoArrayC = usuarios.filter((item, index, array) => {
    //      return item.apelido !== "Chijo"
    //   })
      
    //   console.log(novoArrayC) // vai imprimir da variavel usuario
      // as chaves que for diferente de Chijo, ou seja na chave que tiver o nome Chinjo não sera impresso
      // nem o nome e nem o apelido!

      // -- EXERCÍCIO DE ESCRITA DE CÓDIGO --
      //1
    //   //a)
      const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
         { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
     ]

    //  const arrayNovo = pets.map((item) => {
    //   return item.nome
    //  })
    //  console.log(arrayNovo)

    //  //b)
    //   const arrayNovoB = pets.filter((pets) => {
    //    return pets.raca === 'Salsicha'
    //   })
    //   console.log(arrayNovoB)

     //c)
      //  const arrayNovoC = pets.filter( (item) =>{
        //  const incluir = item.nome.includes('Madame')
          
       //   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${incluir}`
        
     //   const arrayRecebe = arrayNovoC.filter( (item) => {

//        const ray = item.nome.includes('Fluffy')
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${ray}`
//         })
    // console.log(arrayNovoC)
    // console.log(arrayRecebe)
    //2)
    
    const produtos = [
      { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
      { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
      { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
      { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
      { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
      { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
      { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
      { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
      { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
      { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
   ]
   //a)
//     const arrayNew = produtos.map((item) =>{
// return item.nome
//     })
//     console.log(arrayNew)

//     //b)

//       const arrayNewB = produtos.map((item) => {
//         const nome = item.nome;
//         const precoDesconto = Number(item.preco - (5 / 100)).toFixed(2);
//         const total =  `Com desconta de 5% por cento fica ${precoDesconto}`
//         return [nome, total]
//       })
//      console.log(arrayNewB)
     
     //c)
      // const arrayNewC = produtos.filter((item) => {
      //   return item.categoria === 'Bebidas'
      // })
      // console.log(arrayNewC)

      //d)
        //  const arrayNewD = produtos.filter((item) => {
        //    return item.nome.includes('Ypê')
        //  })
        //  console.log(arrayNewD)

        // //e)
        // const arrayNewE = arrayNewD.map( produto => `Compre ${produto.nome}
        //  por ${produto.preco}`)
        //  console.log(arrayNewE)

         //DESAFIO 1
         const pokemons = [
          { nome: "Bulbasaur", tipo: "grama" },
          { nome: "Bellsprout", tipo: "grama" },
          { nome: "Charmander", tipo: "fogo" },
          { nome: "Vulpix", tipo: "fogo" },
          { nome: "Squirtle", tipo: "água" },
          { nome: "Psyduck", tipo: "água" },
       ]
       
 pokemons.nome.sort()
 console.log(pokemons)
