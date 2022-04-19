import styled from "styled-components";

export const TripsCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    word-wrap: break-word;
    width: 600px;
    height: 250px;
    background-color:#25007A;
    border-radius: 25px;
    margin: 8px;
    padding: 15px 0px 10px 25px;
    border: solid green 2px;
    :hover{
        background-color: #06023D;
    }
     strong{
        color: #DEEFE7;
        font-family: sans-serif;
    }
    p{
        color: #DEEFE7;
        font-family: sans-serif;
    }
`

export const ContainerTrips = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color:black;
    padding: 2%;
`

export const ButtonTrip = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    margin-top: 60px;
    button{
        border-radius: 25px;
        :hover{
            background: #96A6D9;
        }
    }
`
export const ListViagens = styled.div`
    margin: auto;
    h1{
        color: white;
    }
`