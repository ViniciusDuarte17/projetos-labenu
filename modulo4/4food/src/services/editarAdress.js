import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToProfile } from "../Routes/coodinator";

const headers = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};

export const editarAdress = (body, clean, navigate) => {
  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then(() => {
      alert("Editado com sucesso");
      clean();
      goToProfile(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
      clean();
    });
};
