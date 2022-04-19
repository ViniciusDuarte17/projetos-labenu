import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const CardDiv = styled.div`
    display: flex;
    justify-content: start;
    margin: 4px;
    padding: 6px;
    font-family: sans-serif ;
    color: #185e81;
    :hover{
        background-color: #d2fcf5;
    }
`

const MatchImg = styled.img`
    width: 45px ;
    height: 45px;
    border-radius: 50px;
`

const ListMatch = () => {
    const [usuarios, setUsuarios] = useState([])

    const pegaUsuarios = () => {
        axios 
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/matches`)
        .then( (res) => {
            setUsuarios(res.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }
  useEffect( () => {
  pegaUsuarios();
  }, [])

    
    return(
        
        <>
        
       {usuarios.map( (usuario) => {
           return(
               <CardDiv key={usuario.id}>
                   <MatchImg src={usuario.photo}/>
                   <p>{usuario.name}</p>
               </CardDiv>
           )
       })}
        </>
    )
}
export default ListMatch;