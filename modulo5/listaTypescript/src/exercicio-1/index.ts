//        --------------- Exercício 1 --------------

const nomeData = (nome:string , data:string) => {  
  const newDate = data.split("/")
  return `Olá me chamo ${nome}, nasci no dia ${newDate[0]} do mês de ${newDate[1]} do ano de ${newDate[2]}`
}

console.log(nomeData( "vinicius", "21/10/1999" ))

