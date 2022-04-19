import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { TripsCard, ContainerTrips, ButtonTrip, ListViagens } from "./styled";
import Button from '@mui/material/Button';


const ListTripsPage = () => {
  
  const [trip, loadingTrip, errorTrip] = useRequestData(`${BASE_URL}/trips`);

  const viagens = trip?.trips;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }; 
  const goApplicationForm = () => {
    navigate("/inscreva-se");
  };

  const listTrips = viagens?.map((tri) => {
    return (
      <TripsCard key={tri.id}>
        <p><strong>Nome:</strong> {tri.name}</p>
        <p> <strong>Descrição:</strong> {tri.description}</p>
        <p> <strong>Planeta:</strong> {tri.planet}</p>
        <p><strong>Duração:</strong> {tri.durationInDays}</p>
        <p> <strong>Data:</strong> {tri.date}</p> 
      </TripsCard>
    );
  });

  return (
    <ContainerTrips>
      <ButtonTrip>
        <Button 
         size="large" 
         variant="contained" 
         color="secondary"
         onClick={goBack}>voltar
         </Button>
        <Button
         size="large" 
         variant="contained"
         color="secondary"
         onClick={goApplicationForm}>
          inscreva-se
          </Button>
      </ButtonTrip>
         <ListViagens>
          <h1>Lista de viagens</h1>
          </ListViagens>
      {loadingTrip && <p>carregando...</p>}
      {!loadingTrip && errorTrip && <p>Deu ruim carrega de novo!</p>}
      {!loadingTrip && listTrips && listTrips.length > 0 && listTrips}
    </ContainerTrips>
  );
};

// {listTrips}

export default ListTripsPage;
