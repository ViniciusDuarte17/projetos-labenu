import React from "react";
import TelaCadastro from "./componente/TelaCadastro";
import TelaUsuario from "./componente/TelaUsuario";
import styled from "styled-components";

const Div = styled.div`
border: 1px solid black;
height: 100vh;
background-color: #025E73;

`

class App extends React.Component{
  state = {
    paginaAtual:"inscrito"
  }
  alteraPagina = () => {
    if(this.state.paginaAtual === "inscrito"){
      this.setState({paginaAtual: "cadastro"})
    } else {
      this.setState({paginaAtual: "inscrito"})
    }
  }
  render(){

    return(
      <Div>
        <button onClick={this.alteraPagina}>Troca de página</button>
        {this.state.paginaAtual === "inscrito" ? <TelaCadastro /> : <TelaUsuario />}
      </Div>
    )
  }
}
export default App;