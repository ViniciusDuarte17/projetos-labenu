import React from 'react'
import styled from 'styled-components';

export const BalaoDeMensagem = styled.div`
  display:flex;
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 2.5em;
  word-wrap: break-word;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
background-color: ${ props => {
  if(props.usuario === "eu") {
    return  "#DDF7C8";
  } else if(props.tipo !== "eu"){
    return "#ffffff";
  };
}};

align-self: ${props => {
  if (props.usuario === "eu") {
    return "flex-end";
    
  };
  
}};
margin-right: ${props => {
        if (props.usuario === "eu") {
            return "1.5em"
        };
    }};

    margin-left: ${props => {
        if (props.usuario !== "eu") {
            return "1.5em"
        };
    }};
`
 const DivPai = styled.div`
 display:flex;
 border: solid  1px black;
 justify-content: flex-end;
 align-items: flex-end;
 align-self: flex-end;
 width: 36%;
 height: 80vh;
 margin: auto;
 max-width: 60%;
min-width: 8%;
margin-bottom: 1em;
 word-wrap: break-word;
 `
export const ContainerNome = styled.div`
    display: flex;
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-wrap: break-word;
  `
export const ContainerInput = styled.input`
width: 9vh;
`
export const ContainerButtom = styled.button`
color: #ff3333;
`
class app extends React.Component {

  state = {
    whats: [
     {
       usuario: "",
       mensagem: ""
     }
    ],

    valorInputUsuario: "" ,
    valorInputMensagem: ""
  };

  adicionarMensagem = ()=>{

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novaMensagens = [...this.state.whats, novaMensagem];

    this.setState({ whats: novaMensagens })

    this.setState({ 
      valorInputMensagem: "",
      valorInputusuario: ""
    });
  }

  onchangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }
  onchangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  };



  render() {

    const listaDeCoteudo = this.state.whats.map( (pessoa) => {

       
      if(pessoa.usuario === "eu"){
        return (
          <BalaoDeMensagem usuario={"eu"}>{pessoa.mensagem}</BalaoDeMensagem>
        );
      } else if(pessoa.usuario !== "eu"){
        return (
          <BalaoDeMensagem tipo={"outro"}>
            <ContainerNome><strong>{ pessoa.usuario  }</strong></ContainerNome>
            <div>{ pessoa.mensagem }</div>
          </BalaoDeMensagem>
        );
      };
      
    });

    return (
      <DivPai >
        <ContainerInput
        value={this.state.valorInputUsuario}
        onChange={this.onchangeInputUsuario}
        placeholder={"Usuário"}
        />

        <input 
        value= {this.state.valorInputMensagem}
        onChange={this.onchangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <ContainerButtom onClick={this.adicionarMensagem}>Enviar</ContainerButtom>

        <div>{listaDeCoteudo}</div>

      </DivPai>
    )

  }

}



export default app 