import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/homepage.png";
import Cart from "../../assets/shopping-cart.png";
import Profile from "../../assets/avatar.png";
import { ContainerFooter, Button } from "./styled";


function Footer() {
  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate("/carrinho");
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const goToProfilePage = () => {
    navigate("/perfil");
  };

  return (
    <div>
      <ContainerFooter>
        <Button onClick={goToHomePage}>
          <img src={Home} alt="Logo Casa" />
        </Button>
        <Button onClick={goToCartPage}>
          <img src={Cart} alt="Logo Carrinho de Compra" />
        </Button>
        <Button onClick={goToProfilePage}>
          <img src={Profile} alt="Logo Perfil Avatar" />
        </Button>
      </ContainerFooter>
    </div>
  );
}

export default Footer;
