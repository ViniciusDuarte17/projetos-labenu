/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 const comprandoCartaUsuario = comprarCarta()

const maisUmaProUsuario = comprarCarta()

 const usuario = Number(comprandoCartaUsuario.valor + maisUmaProUsuario.valor)
 console.log(usuario)

 const comprandoCartaPc  = comprarCarta()

 const maisUmaProPc = comprarCarta()


 const computador = Number(comprandoCartaPc.valor + maisUmaProPc.valor )
 console.log(computador);
 
 const computador1 = Number(comprandoCartaPc.valor + maisUmaProPc.valor + computador)

 let adicionado = [];
 adicionado.push(comprarCarta());
 console.log(adicionado)

 const novoUsuario = Number(usuario + adicionado[0].valor)

if (confirm('Bem-vindo ao jogo de Blackjack!' + '\n' + 'Quer iniciar uma nova rodada?')) {
  
   for(let i = 0; computador < novoUsuario; i+computador){

      if(confirm(`Suas cartas são ${comprandoCartaUsuario.texto} - ${maisUmaProUsuario.texto}. A carta revelada do computadoor é ${comprandoCartaPc.texto} `
      + '\n' + 'Deseja comprar mais uma carta?')) {
        if(novoUsuario > computador && novoUsuario < 22) {
            {
              alert(`Usuario - Cartas são ${comprandoCartaUsuario.texto } ${maisUmaProUsuario.texto} ${adicionado[0].valor} - Pontuação ${novoUsuario}` + '\n' +
              `Computador - Cartas: ${comprandoCartaPc.texto} ${comprandoCartaPc.texto} ${computador}  - Pontuação ${computador1}` + '\n' + 
              `Usuario ganhou`)
           } 
        } else if(novoUsuario === computador) {
     
           alert(`Usuario - Cartas são ${comprandoCartaUsuario.texto } ${maisUmaProUsuario.texto} ${adicionado[0].valor} - Pontuação ${novoUsuario}` + '\n' +
           `Computador - Cartas: ${comprandoCartaPc.texto} ${comprandoCartaPc.texto} ${computador} - Pontuação ${computador1}` + '\n' + 
           `Empate`)
        }
       
        else {
           alert(`Usuario - Cartas são ${comprandoCartaUsuario.texto } ${maisUmaProUsuario.texto} ${adicionado[0].valor} - Pontuação ${novoUsuario}` + '\n' +
           `Computador - Cartas: ${comprandoCartaPc.texto} ${comprandoCartaPc.texto} ${computador} - Pontuação ${computador1}` + '\n' + 
           `Computador ganhou`)
         }
        }
      }
       
   }   
   else if(alert('O jogo acabou.')) {
      alert('O jogo acabou.')}
      
   else  {
      if(usuario > computador && usuario < 22) {
       alert(`Usuario - Cartas: ${comprandoCartaUsuario.texto} ${maisUmaProUsuario.texto} - Pontuação: ${usuario}` + '\n' + 
       `Computador - Cartas: ${comprandoCartaPc.texto} ${maisUmaProPc.texto} - Pontuação: ${computador}` + '\n' + 
       `Usuário ganhou!`)
      } 
    
     
      if(computador > usuario && computador < 22) {
      alert(`Usuario - Cartas: ${comprandoCartaUsuario.texto} ${maisUmaProUsuario.texto} - Pontuação: ${usuario}` + '\n' + 
      `Computador - Cartas: ${comprandoCartaPc.texto} ${maisUmaProPc.texto}  - Pontuação: ${computador}` + '\n' + 
      `Computadou ganhou!`)
    }
     else{
       alert(`Usuario - Cartas: ${comprandoCartaUsuario.texto} ${maisUmaProUsuario.texto} - Pontuação: ${usuario}` + '\n' + 
      `Computador - Cartas: ${comprandoCartaPc.texto} ${maisUmaProPc.texto} - Pontuação: ${computador}` + '\n' + 
       `Empate!`)
   }
 
   
}

 