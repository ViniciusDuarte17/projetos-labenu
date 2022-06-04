import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToProfile } from "../Routes/coodinator";

const headers = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};

export const editar = (body, clean, navigate) => {
  axios
    .put(`${BASE_URL}/profile`, body, headers)
    .then(() => {
      alert("usuário editado com sucesso!");
      clean();
      goToProfile(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
