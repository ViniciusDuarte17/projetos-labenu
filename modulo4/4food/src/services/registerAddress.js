import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed } from "../Routes/coodinator";

const headers = {
    headers: {
        auth: localStorage.getItem("token"),
    }
};

export const registerAddress = (body, clean, navigate) => {
    
  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then(() => {
        alert("Endereço criado com sucesso");
        clean();    
        goToFeed(navigate)
    })
    .catch((err) => {
        alert(err.response.data.message);
        clean();
    });
};