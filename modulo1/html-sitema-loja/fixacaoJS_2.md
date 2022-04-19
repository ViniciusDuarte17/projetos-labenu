//function calcular(){
  const quantidade = Number(prompt('Digite quantas maçãs quer? ')) 
  
  if(quantidade < 12){
   return quantidade * 1.30;
  } 
  else if(quantidade >= 12){
    return quantidade * 1
  }
}

console.log(calcular())