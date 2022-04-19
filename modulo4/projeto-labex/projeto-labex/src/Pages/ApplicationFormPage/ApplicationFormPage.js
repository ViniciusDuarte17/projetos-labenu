import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRequestData } from "../../hooks/useRequestData";
import { CardForm, ContainerForm, FormInput, TyleButton } from "./syled";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import {  paises } from "./states";


const ApplicationFormPage = () => {
    const [seleTrip] = useRequestData(`${BASE_URL}/trips`);
    const { form, onChange, cleanFields } = useForm({
        tripName: '',
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country:''
    })

    const ApplicationTrip = (event) => {
        event.preventDefault()
            axios 
            .post(`${BASE_URL}/trips/${form.tripName}/apply`, form)
            .then( () => {
               alert("usuario criado com sucesso")
            })
            .catch( (err) => {
               alert("algo deu erro")
            })
            cleanFields();
    }

    const selectTrip = seleTrip?.trips;
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
  
    return (
        <ContainerForm>
            <h1>Inscreva-se para uma viagem</h1>
            <CardForm onSubmit={ApplicationTrip}>
            
            <FormInput>
                <select 
                name={"tripName"}
                 value={form.tripName} 
                 onChange={onChange}
                 required
                 title="Campo obrigatório"
               >
                  <option value={""} disabled>Escolha uma viagem</option>
                   {selectTrip?.map((trip) => {
                        return <option value={trip.id} key={trip.id}>{trip.name}</option>
                    })}
               </select>
              
                <br/>
                <TextField 
                placeholder="Digite seu nome"
                label="Nome"
                name={"name"}
                 value={form.name}
                 onChange={onChange}
                 required
                 inputProps={{ pattern: '^.{3,}' }}
                 title={"Deve conter no mímino 3 letras"}
                 />
                <br/>
                <TextField 
                placeholder="Digite sua idade"
                label="Idade"
                type={'number'}
                name={"age"}
                value={form.age}
                onChange={onChange}
                required
                inputProps={{ min: 18 }}
                title={"Aceitamos participante igual ou maior que 18 anos"}
                 />
                 <br/>
                <TextField 
                placeholder="Texto de Candidatura"
                label="Texto de Candidatura"
                name={"applicationText"}
                value={form.applicationText}
                onChange={onChange}
                required
                inputProps={{ pattern: '^.{30,}' }}
                 title={"Deve conter no mímino 30 letras"}
                />
                <br/>
                <TextField 
                 placeholder="Digite sua profissão"
                label="Profissão" 
                name={"profession"}
                value={form.profession}
                onChange={onChange}
                required
                inputProps={{ pattern: '^.{10,}' }}
                 title={"Deve conter no mímino 10 letras"}
                />
                <br/>
           
              <select 
               name={"country"}
               value={form.country} 
               onChange={onChange}
               required
               title="Campo obrigatório"
              >
                  <option value={""} disabled>Escolha uma país</option>
                  {paises.map( (pais) => {
                      return <option value={pais} key={pais} >{pais}</option>
                  })}
              </select>
            </FormInput>
               <br />     
            <TyleButton>
               
               <Button 
               size="large" 
               variant="contained" 
               color="secondary"  
               onClick={goBack}
               >voltar</Button>
               <Button  
               size="large"
               variant="contained"
               color="secondary" 
               type={"submit"}
               >Criar viagem</Button>
           </TyleButton>
         
            
            </CardForm>
        </ContainerForm>
    );
};

export default ApplicationFormPage;
