import React from 'react';
import styled from 'styled-components'

import perfil from './img/eu.jfif'
import foto1 from './img/pah.jfif'
import foto2 from './img/be.jfif'
import foto3 from './img/bebe.jfif'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const MeuInput = styled.input`
display: flex;
max-width: 50%;
min-width: 20%;
margin-top: 0.5%;
margin-bottom: 1.5%;
border: solid 1px black;
`

const MinhaDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 30%;
height: 25%;
margin-left: 32%;
margin-top: 1%;
margin-bottom: 0.5%;
border: solid 1px black;
border-radius: 50%;
border: none;
`
class App extends React.Component {

  state = {

    post:[

      {
        nomeUsuario:'Vinicius Duarte',
        fotoUsuario: perfil,
        fotoPost: foto1
      },

      {
            nomeUsuario:'Benjamin Duarte',
            fotoUsuario:foto2,
            fotoPost:foto2
      },
      {
          nomeUsuario:'Caila Duarte',
          fotoUsuario:'https://picsum.photos/50/50' ,
          fotoPost: foto3
      },
     
      
    ],

    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorPost: ""
  }


  pastarNovoPost = () => {

   const newPost = {

     nomeUsuario: this.state.valorNomeUsuario,
     fotoUsuario: this.state.valorFotoUsuario,
     fotoPost: this.state.valorPost

   };

   const newPosts = [...this.state.post, newPost ];

   this.setState({post: newPosts});

   this.setState({
    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorPost: ""
   });

  }

  onChangeInputNomeUsuario = (event) =>{
  this.setState({ valorNomeUsuario: event.target.value })
  }
  onChangeInputFotoUsuario = (event) =>{
  this.setState({ valorFotoUsuario: event.target.value })
  }
  onChangeInputPost = (event) =>{
  this.setState ({ valorPost: event.target.value })
  }
  render() {

    const postLista = this.state.post.map( (pos) => {
      
      return (

         <MainContainer>
        <Post
         nome={pos.nomeUsuario} 
         fotoUsuario={pos.fotoUsuario} 
         fotoPost={pos.fotoPost}
        />
       </MainContainer>
      );
    })

    return (
        <>

    
    <MinhaDiv >
    <MeuInput
      value={this.state.valorNomeUsuario}
      onChange={this.onChangeInputNomeUsuario}
      placeholder={"Nome do usuario"}
      />

      <MeuInput
      value={ this.state.valorFotoUsuario }
      onChange={ this.onChangeInputFotoUsuario}
      placeholder={"adicionar foto"}
      />

      <MeuInput
      value={this.state.valorPost}
      onChange={this.onChangeInputPost}
      placeholder={"foto poste"}
      />
      
      <button onClick={this.pastarNovoPost}>Novo Poste</button>
    </MinhaDiv>
         {postLista}
        </> 
    )
    }
}

export default App;
