import React from 'react'
import styled from 'styled-components'

const Botao = styled.button`
    width: 10vw;
    margin-top:2%;
`

export default class Etapa2 extends React.Component{
    render(){
        return(
            <>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <p>5. Qual curso?</p>
            <input />
            <p>5. Qual a unidade de ensino?</p>
            <input />
            <Botao  onClick={this.props.irParaProximaEtapa}> Próxima etapa</Botao>
            </>
        )
    }
}