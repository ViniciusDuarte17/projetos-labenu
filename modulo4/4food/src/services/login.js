import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed } from "../Routes/coodinator";

export const login = (body, clean, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clean();
      goToFeed(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
      clean();
    });
};
