import React from 'react'
import styled from 'styled-components'

const ContainerPai = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 320px;
    
`
const Botao = styled.button`
    width: 10vw;
    margin-top:2%;
`
export default class Etapa1 extends React.Component{
    render(){
        return(
            <ContainerPai>
            <h1>Etapa 1 - DADOS GERAIS</h1>

            <p>1. Qual o seu nome?</p>
            <input />

            <p>2. Qual a sua idade?</p>

            <input />

            <p>3. Qual o seu seu email?</p>

            <input />

            <p>4. Qual sua escolaridade?</p>

            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
            <Botao onClick={this.props.irParaProximaEtapa}> Próxima etapa</Botao>
            
            </ContainerPai>
        )
    }
}