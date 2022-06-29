

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1,pokemon2,pokemon3)

// 4 b) para a transpilação de typescript pro javascript, precisamos ter uma pasta build configurada,
// e quando for usar a transpilação precisamos indidcar o caminho da pasta que está em execução, e precisamos passar
// o caminho da pasta build onde vai ter todo o nosso código typescript convertido para javaScript
// ex de um script : "start4": "tsc && node ./build/exercicio4"

// 4 c ) seria sim quanto mais fundo a pasta está, teremos que passar o caminho dirente para tal arquivo 
// ex: se tisse outro pasta dentro do src usuria dois .. para sair uma pasta e assim por diante. até chegar
// no caminho desejavel

// 4 d) Sim, por exemplo "start4": "tsc && node ./build/exercicio4 && clear && tsc && node ./build/exercicio3"
// Se eu usar esse comando esterei fazendo mais de uma coisa em um comando, estou executando o exercicio 3 e o 4
// e ainda tem um clear que mais um metado de limpar, ou seja, consigo fazer com o que um unico comando realize
// multiplas tarefas