import React from "react";
import CriarPlayList from "./components/CriarPlayList";
import PlayList from "./components/PlayList";
import styled from "styled-components";


const Containe = styled.div`
   border: 1px solid black;
   height: 100vh;
   background-color: #012626;
`

const ButtonApp = styled.button`
    color: white ;
    background-color: #45afc7;
    margin-bottom: 2%;
    height: 6%;
    display: flex;
    margin: auto;
    align-items: center;
    margin-top: 10%;
    :hover{
      color:#012626;
      background-color: white;
    }
`

class App extends React.Component {
  state = {
    paginaAtual: "cadastrar"
  }
  alterarPagina = () => {
    if(this.state.paginaAtual === "cadastrar"){
      this.setState({paginaAtual: "listaPlay"})
    } else {
      this.setState({paginaAtual: "cadastrar"})
    }
  }
    render(){
      return (
        <Containe>
       {this.state.paginaAtual === "cadastrar" ? <CriarPlayList /> : <PlayList />}
       <ButtonApp  onClick={this.alterarPagina}><b>Trocar de página</b></ButtonApp>
        </Containe>
      );
    }
 
}

export default App;
