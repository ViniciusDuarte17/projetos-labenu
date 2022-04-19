import React, { useState } from "react";
import HeaderPage from "../HeaderPage/Header";
import ListMatch from "../ListMatch/Match";
import MainPage from "../MainPage/Main";
import { ContainerMain, PageDamain} from "./styled";

const CardPage = () => {
  const [currentPage, setCurrentPage] = useState("telaInicial");

  const change = (currentpage) => {
    setCurrentPage(currentpage);
  };

  

  const returnCurrentPage = () => {
    switch (currentPage) {
      case "telaInicial":
        return (
          <ContainerMain>
            <HeaderPage  chagePage={change}
            />
          
            <PageDamain>
              <MainPage />
              
            </PageDamain>

          
          </ContainerMain>
        );

      case "telaMatch":
        return (
          <ContainerMain>
            <HeaderPage chagePage={change} />
            <ListMatch />
          </ContainerMain>
        );

      default:
        return <h2>Erro ao encontrar listas</h2>;
    }
  };
  return <>{returnCurrentPage()}</>;
};

export default CardPage;
