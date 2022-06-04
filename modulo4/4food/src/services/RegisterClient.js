import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToRegisterAddress } from "../Routes/coodinator";

export const RegisterClient = (body, clean, navigate) => {

  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => { 
        localStorage.setItem("token", res.data.token);
        clean();
        goToRegisterAddress(navigate);// envia para cadastro de endereço
    })
    .catch((err) => {
        alert(err.response.data.message);
        clean();
    });
};