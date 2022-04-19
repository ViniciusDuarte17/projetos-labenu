import React from 'react'
import styled from 'styled-components'

const Botao = styled.button`
    width: 10vw;
    margin-top:2%;
`
export default class Etapa3 extends React.Component{
    render(){
        return (
            <>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ESINO</h3>
            <p>5. Por que voê não terminou um curso de graduação?</p>
            <input />

            <p>Você fez algum curso complementar?</p>
            <input />

            <Botao onClick={this.props.irParaProximaEtapa}> Próxima etapa</Botao>
            </>
        )
    }
}