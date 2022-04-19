import React  from "react";
import { ContainerHeader, ContainerImgMatch, ContainerIconeHome, ContainerIconeTelaMatch } from "./styled";
import {AiOutlineHome} from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import logo from "../..//assets/atromatch.png"

const HeaderPage = (props) => {

  return (
    <ContainerHeader>
      <div>
          <ContainerImgMatch src={logo}
           alt="astromatch"/>
      </div>

      <div>
        <ContainerIconeHome  onClick={() => props.chagePage("telaInicial")}>
          <AiOutlineHome />
          </ContainerIconeHome>
      </div>

      <div>
        <ContainerIconeTelaMatch onClick={() => props.chagePage("telaMatch")}>
        <VscAccount/>
        </ContainerIconeTelaMatch>
      
      </div>

    </ContainerHeader>
  );
};

export default HeaderPage;
