import axios from "axios"
import React from "react"
import styled from "styled-components"
const axiosConfig = {
    headers:{
        Authorization: "vinicius-duarte-gebru"
    }
}

const DivPai = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    border: 1px solid black;
    max-width: 50vw;
    min-width: 30vw;
    height: 90vh;
    background-color: #011F26;

    @media screen and (max-width: 600px ){
    display: flex;
    justify-content: center;
    margin: auto;
    border: 1px solid black;
    max-width: 70vw;
    height: 70vh;
    background-color: #063c47;
}
`
const Span = styled.span`
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
`

const CardUser = styled.div`
    display: flex ;
    justify-content: space-between ;
    margin: 10px;
    padding: 10px;
    width: 30vw;
    height: 4vh;
    border: 1px solid white;

    @media screen and (max-width: 600px ){
     display: flex ;
    justify-content: space-between ;
    margin: 10px;
    padding: 10px;
    width: 50vw;
    height: 4vh;
    border: 1px solid white;
}
`
const Atualizar = styled.div`
    color:white;
`

class TelaUsuario extends React.Component{
    state={
        listaUsuario: [],
        paginaAtual: "listaUsuario",
        idUsuario: "",
        name: ""
    }

    componentDidMount(){
        this.buscaUsuarioLista();
    }
    buscaUsuarioLista = async () => {

       try {
        const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
         )
         this.setState({listaUsuario: res.data});
       } catch (error) {
          
    }
}
    exclusaoUsuario = (idUsuario) => {
        if (("Você vai apagar o usuário da lista, é isso que quer fazer?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
            axiosConfig
            )
            .then( () => {
                alert("Usuário apagado com sucesso!")
                this.buscaUsuarioLista();
            })
            .catch( () => {
                alert("Erro ao apagar o usuário")
            })
        }
    }
    nameChange = (ev) => {
        this.setState({name: ev.target.value})
    }
    idNameChange = (ev) => {
        this.setState({idUsuario: ev.target.value})
    }
    pesquisarPorNome = async () => {

        try {
            const res = await axios 
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name${this.state.name}=&email=`,
            axiosConfig
            )
            this.setState({listaUsuario: res.data})
        } catch (err) {
            alert("erro ao criar usuário")
        }
      
    }
    render(){
        return(
            <DivPai>
              {this.state.paginaAtual === "listaUsuario" ? (
                  <div>
                      <ul>
                          {this.state.listaUsuario.length === 0 && <Atualizar>Atualizando...</Atualizar>}
                          {this.state.listaUsuario.map( (user) => {
                              return (
                                  <CardUser>
                                      <Span >
                                        {user.name}
                                      </Span>
                                      <button 
                                      onClick={()=> this.exclusaoUsuario(user.id)}
                                      >
                                          X
                                      </button>
                                  </CardUser>
                              )
                          })}
                      </ul>
                     
                  </div>
              ): (
                  <div idUsuario={this.state.idNameChange} paginaAtual={this.state.paginaAtual}/>
              )}
            </DivPai>
        )
    }
}

export default TelaUsuario;