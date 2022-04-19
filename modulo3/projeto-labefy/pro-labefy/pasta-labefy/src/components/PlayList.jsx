import React from "react";
import axios from "axios";
import styled from "styled-components";



  const CompoButton = styled.button`
      color: #ffffff;
      margin-left: 25%;
      background-color: black;
  `  
  const OutroButton = styled.button`
  color: #ffffff;
  margin-left: 7%;
  background-color: black;
`  
  const CampoInput = styled.input`
       height: 19%;
       width:15% ;
  `

const DivFilha = styled.div`
    font-size: 18px;
    color:white;
    border: solid 1px white;
   width: 50vw;
   margin: auto;
   padding: auto;
   background-color: #13678A;
`

const DivDetail = styled.div`
    border: solid 1px white;
    width: 450px;
    margin:10px;
    padding: 10px;
    background-color: #A1A2A6;
`
const ParaDetail = styled.p`
color: white;
`
const axiosConfing = {
    headers: {
        Authorization: "vinicius-duarte-gebru"
    }
}

class PlayList extends React.Component{
    state = {
        namePlayList: [],
        onClick: 'false',
        name: "", 
        artist: "",
        url: ""
       
    }
    nameInput = (ev) => {
        this.setState({name: ev.target.value})
    }

    artistaInput = (ev) => {
        this.setState({artist: ev.target.value})
    }

    urlInput = (ev) => {
        this.setState({ url: ev.target.value})
    }
  
    componentDidMount(){
        this.getAllPlayList();
    }
  
    getAllPlayList = () => {
        axios 
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, 
            axiosConfing
        )
        .then( (resp) => {
           
            this.setState({namePlayList: resp.data.result.list})
        })
        .catch( () => {
            alert("Erro ao criar play list")
        })
    }

    delePlayList = (idPlay) =>{
        
            axios 
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}`,
            axiosConfing   
            )
            .then( ()=> {
                alert("Play list apagado com sucesso")
                this.getAllPlayList();
            })
            .catch( ()=> {
                alert("Erro ao apagar play list")
            })
        
    }

    getPlaylistTracks = (id) => {
      
        axios 
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        axiosConfing
        )
        .then( (resp) => {
            this.setState({namePlayList: resp.data.result.tracks})
            // console.log(resp.data.result.tracks)
            
            this.setState({onClick: 'true'})
        })
        .catch( () => {
            alert('erro')
        })
    }
    addTrackToPlayList = (id) => {
        const bory = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        bory,axiosConfing
        )
        .then(()=>{
           this.setState({
            name: "",
            artist: "",
            url: ""
           })
           alert('Música adicionada com sucesso!')
        })
        .catch(()=> {
            alert('Erro ao adicionar musica a play list')
        })
    }

    voltarPlayList = () => {
        this.setState({onClick: 'false'})
        this.getAllPlayList();
    }

    render(){
        
        return(
            <div>
               
                {this.state.namePlayList.map( (user) => {
                    
                    if(this.state.onClick === 'true'){
                        return (
                            <DivDetail key={user.id}>
                               
                                <label 
                            onClick={()=> this.getPlaylistTracks(user.id)}> <ParaDetail> <b>{ user.name}</b> </ParaDetail> 
                                 <audio  controls={"controls"}>
                                     
                                     <source src={user.url} type="audio/mp3"/>
                                     </audio>
                                  
                                </label>
                                <button onClick={()=> this.voltarPlayList()}>voltar play list</button>
                                    <ParaDetail>{user.artist} </ParaDetail>
                            </DivDetail>
                            
                        )
                    } else if(this.state.onClick === 'false') {
                        return (
                            <DivFilha  key={user.id}>
                                <p>Play list</p>
                                {user.name}
                                <CompoButton onClick={()=> this.getPlaylistTracks(user.id)}>ver detalhe</CompoButton>
                                <OutroButton onClick={()=> this.delePlayList(user.id)}> Delete playList </OutroButton>

                                <div>
                                    <p><b>Adicione msc a sua play list</b></p>
                                    <CampoInput
                                placeholder="nome"
                                type={"text"}
                                value={this.state.name}
                                onChange={ this.nameInput}
                                />
                              
                                <CampoInput
                               
                                placeholder="artista"
                                type={"text"}
                                value={this.state.artist}
                                onChange={ this.artistaInput}
                                />
                                
                                <CampoInput
                               
                                placeholder="url da msc"
                                type={"text"}
                                value={this.state.url}
                                onChange={ this.urlInput}
                                />
                               
                                <button onClick={()=> this.addTrackToPlayList(user.id)}>Adicionar</button>
                               
                             </div>
                            </DivFilha>
                        )
                    } 
                   
                })}

            </div>
        )
    }
}

export default PlayList;