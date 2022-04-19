
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';

const ContainerPai = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 250px;
    margin:auto;
    
`

export default class  App extends React.Component {

  state = {
    etapa: 1,
  }
  renderizarEtapa = () => {
 

    switch(this.state.etapa) {
      case 1:
        return <Etapa1 irParaProximaEtapa ={this.irParaProximaEtapa}/>;
        
        case 2: 
        return <Etapa2 irParaProximaEtapa= {this.irParaProximaEtapa}/>;
        
        case 3:
          return <Etapa3 irParaProximaEtapa= {this.irParaProximaEtapa}/>;
          
          case 4: 
          return <Final />;
          default: <p>Não encontramos nenhum resultado</p>
    }
  }
   irParaProximaEtapa = () => {
     this.setState({etapa: this.state.etapa + 1})
   }
  render(){
  
    return(
      <ContainerPai>
      {this.renderizarEtapa()}
      
      </ContainerPai>
    )
  }
}



