import React from "react";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { ButtonSp, ContainerHome, DivFont } from "./styled";



const HomePage = () => {
    
    const navigate = useNavigate()

    const gotToTrip = () => {
        navigate("/viagens")
    }
    const goLogin = () => { 
        const token = localStorage.getItem("token")
        if(token){
            navigate("/admin")
        }
        else{
            navigate("/login")
        }

    }
    return(
      
            <ContainerHome>
               <DivFont>
                    <h1>Labex</h1>
                </DivFont>
            <ButtonSp>
           
            <Button 
            size="large"
            variant="contained"  
            color="secondary" 
            onClick={gotToTrip}>
            Ver viagens</Button>
          
            <Button
             size="large" 
             variant="contained"  
             color="secondary"
             onClick={goLogin}>
             Área de Admin</Button>
            </ButtonSp>
        </ContainerHome>
      
    )
}

export default HomePage;