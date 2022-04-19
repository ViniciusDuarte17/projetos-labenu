import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ButtonSps, CardTrip2, CardTripDetail, ContainerTripDetail } from "./styled";
import Button from '@mui/material/Button';

const TripDetailsPage = () => {
    useProtectedPage();
    const navigate = useNavigate();
   const params = useParams();
    const [tripDetail, setTripDetail] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
   const headers = {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            };
   // Requisição para pegar o detalhes da viagem
    useEffect( () => {
        setIsLoading(true)
        axios
        .get(`${BASE_URL}/trip/${params.id}`, headers)
        .then((res) => {
            setTripDetail(res.data.trip);
            setIsLoading(false)
        })
        .catch((err) => {
            setError("ERRO:", err.resonse);
            setIsLoading(false)
        });
    },[])

    // Requisição para candidatos pendentes 

    
        const listCandidatesPendant =  tripDetail?.candidates.map( (pendantCandidate) => {
            const approve = (decision) => {
             
                const body = {
                    approve: decision
                }
               axios 
               .put(`${BASE_URL}/trips/${params.id}/candidates/${pendantCandidate.id}/decide`, body, headers)
               .then( res => {
                   alert(`Decisão registrada com sucesso`)
                   window.location.reload(false)
               })
               .catch( err => {
                   alert("Error ao aprovar candidato")
               })
            }
            
            return(
                <CardTripDetail key={pendantCandidate.id}>
                   <p><b>Nome:</b> {pendantCandidate.name} </p>
                   <p><b>Profissão:</b> {pendantCandidate.profession} </p>
                   <p><b>idade:</b> {pendantCandidate.age} </p>
                   <p><b>País:</b> {pendantCandidate.country} </p>
                   <p><b>Texto de Candidatura:</b> {pendantCandidate.applicationText} </p>
       
                   <ButtonSps>
                         <Button  
                          size="large" 
                          variant="contained" 
                          color="secondary"
                          onClick={()=> approve(true) }
                         >Aprovar</Button>
                         <Button 
                         size="large" 
                         variant="contained" 
                         color="secondary"
                         onClick={()=> approve(false)}> 
                         Reprovar</Button>
                  </ButtonSps>
               </CardTripDetail>
               )
           } )
       
        
    //   Requisição para candidatos aprovado
      const listCandidatesApproved = tripDetail?.approved.map( (listProved) => {
          return(
              <div key={listProved.id}>
                  <p>{listProved.name}</p>
              </div>
          )
      })

    return(
        <ContainerTripDetail>
           <CardTrip2>
           <h1>{tripDetail?.name}</h1>
            <p> <strong>Nome: </strong> {tripDetail?.name}</p>
            <p> <strong>Descrição: </strong>{tripDetail?.description}</p>
            <p> <strong>Planeta: </strong>{tripDetail?.planet}</p>
            <p> <strong>Duração: </strong>{tripDetail?.durationInDays}</p>
            <p> <strong>Data: </strong>{tripDetail?.date}</p>
           </CardTrip2>
           <br/>
           <div>
               <Button 
               size="large" 
               variant="contained" 
               color="secondary"
               onClick={()=> navigate(-1)}>
                   Voltar
                   </Button>
           </div>
           <div>
               <h3>Candidatos pendes</h3>
               <br/>
               {/* {listCandidatesPendant} */}
               {isLoading && <p>carregando...</p>}
               {!isLoading && error && <p>Falha ao carregar!</p>}
               {!isLoading && listCandidatesPendant && listCandidatesPendant.length > 0 && listCandidatesPendant}
               {!isLoading && listCandidatesPendant && listCandidatesPendant.length === 0 && listCandidatesPendant &&
                <p>Não há candidatos pendentes</p>}
           </div>
           <div>
               <h3>Candidatos aprovados</h3>
            
              {isLoading && <p>carregando...</p>}
               {!isLoading && error && <p>Falha ao carregar!</p>}
               {!isLoading && listCandidatesApproved && listCandidatesApproved.length > 0 && listCandidatesApproved}
               {!isLoading && listCandidatesApproved && listCandidatesApproved.length === 0 && listCandidatesApproved &&
                <p>Não há candidatos aprovado</p>}
           </div>
         
        </ContainerTripDetail>
    )
}

export default TripDetailsPage;