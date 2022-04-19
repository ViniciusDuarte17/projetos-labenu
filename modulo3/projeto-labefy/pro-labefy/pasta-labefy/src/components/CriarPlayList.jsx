import React from "react";
import axios from "axios";
import styled from "styled-components";


const ContainerTelaCadastro = styled.div`
     display:flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 12%;
    align-items: center;
    width: 45% ; 
    height: 32vh ;
    background-color: #027368;

`
const CompoInput = styled.input`
    border: 1px solid;
    margin-bottom: 2%;
    height: 17%;
    width:45% ;
`

const MeuButton = styled.button`
     color: #26e9d5 ;
     background-color: #012626;
    margin-bottom: -1%;
    height: 18%;
    :hover{
        color: #012626;
        background-color: white ;
    }
`

const axiosConfing = {
    headers: {
        Authorization: "vinicius-duarte-gebru"
    }
}

class CriarPlayList extends React.Component{
    state = {
        name:""
    }
    nameChange = (ev) => {
        this.setState({name: ev.target.value})
    }

    createPlayList = () =>{
        const body = {
            name: this.state.name
        }

        axios 
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        body, axiosConfing
        )
        .then( () => {
            alert(`play list criar com sucesso`)
            this.setState({name:""})
        })
        .catch( () => {
            alert(`erro ao criar play list`)
        })
    }

    render(){
        return(
            <ContainerTelaCadastro>
               <CompoInput
               placeholder="Criar play list"
               type={"text"}
               value={this.state.name}
               onChange={this.nameChange}
               />
               <MeuButton onClick={this.createPlayList}> <b>Criar PlayList</b></MeuButton>
            </ContainerTelaCadastro>
        )
    }
}

export default CriarPlayList;