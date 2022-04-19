import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CampoSelect, ContainerCreateForm, CreateCart, InputForm, planets, TopButton } from "./styled";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const CreateTripPage = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays:''
    })
    const headers = {
        headers: {
            auth: localStorage.getItem("token"),
        },
    };
    const enviaFormulario = (event) => {
        event.preventDefault()
        axios
        .post(`${BASE_URL}/trips`,form,headers )
        .then( ()=> {
            alert("viagem criada sucesso!")
        })
        .catch( ()=> {
            alert("erro ao criar sua")
        })
        cleanFields()
      }
     
    const goBack = () => {
        navigate(-1);
    };
     
    return (
        <ContainerCreateForm>
           
            <CreateCart>
            <h1>Criar viagem</h1>
            <InputForm onSubmit={enviaFormulario}>
                <TextField
                label={"Nome"}
                placeholder={"Nome"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                required
                inputProps={{ pattern: '^.{5,}' }}
                title={"Deve conter no mímino 5 letras"}
                />
                <br />
                  <CampoSelect
                   label={"Planeta"}
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                    defaultValue={""}
                    onChange={onChange}
                    required
                    
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </CampoSelect>
                <br />
                <TextField
                placeholder={"Data"}
                name={"date"}
                value={form.date}
                onChange={onChange}
                type={"date"}
                required
                
                />
               <br />
                <TextField
                   label={"Descrição"}
                   placeholder={"Descrição"}
                   name={"description"}
                   value={form.description}
                   onChange={onChange}
                   required
                   inputProps={{ pattern: '^.{30,}' }}
                   title={"Deve conter no mímino 30 letras"}
                />
                <br />
                <TextField
                   label={"Duração"}
                   placeholder={"Duração"}
                   name={"durationInDays"}
                   value={form.durationInDays}
                   onChange={onChange}
                   type={"number"}
                   required
                   inputProps={{ min: 50 }}
                   title={"Digite um número igual a 50 ou maior"}
                />
                 <br />
                <TopButton>
                <Button
                  variant="contained"
                  color="secondary"
                 onClick={goBack}
                 >Voltar</Button>
                <Button 
                  variant="contained"
                  color="secondary"
                type={"submit"}>
                Criar</Button>
                </TopButton>
            </InputForm>
            </CreateCart>
          
        </ContainerCreateForm>
    );
};

export default CreateTripPage;

 
