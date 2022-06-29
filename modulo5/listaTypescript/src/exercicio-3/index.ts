enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

const streaming = (nomeFilme: string, anoLancando: number, generoFilme:string, pontuacao?: number) => {

    if(pontuacao === undefined){
       
        return `nome: ${nomeFilme}, anoLancamento: ${anoLancando}, genero: ${generoFilme}`

    } else {
        return `nome: ${nomeFilme}, anoLancamento: ${anoLancando}, genero: ${generoFilme}, pontuação ${pontuacao}`
    }
    
}
console.log(streaming("vini", 1999, GENERO.TERROR))

// console.log(streaming("vini", 1999, GENERO.DRAMA, 74)) paramentro opcional