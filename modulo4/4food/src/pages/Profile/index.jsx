import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import {
  goToAddAndress,
  goToEdit,
} from "../../Routes/coodinator";
import { CardOrder } from "./cardOrder/CardOrder";
import EditIcon from "@mui/icons-material/Edit";

import {
  ButtonUi,
  ContainerProfile,
  HistoricoPedido,
  PerfilSpan,
  ProfilePedidosVazios,
  Rectangle,
} from "./styled";

const Profile = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [profile] = useRequestData(`${BASE_URL}/profile`);
  const [history] = useRequestData(`${BASE_URL}/orders/history`);
  const order = history?.orders.length; 

  return (
    <ContainerProfile>
      <Header>
        <h2>Meu perfil</h2>
      </Header>
      <PerfilSpan>
        <span>
          <p> {profile?.user.name}</p>
          <p> {profile?.user.email}</p>
          <p> {profile?.user.cpf}</p>
        </span>
        <ButtonUi onClick={() => goToEdit(navigate)}>
          <EditIcon />
        </ButtonUi>
      </PerfilSpan>
      <Rectangle>
        <div>
          <span>Endereço cadastrado</span>
          <p>{profile?.user.address} </p>
        </div>
        <div>
          <button onClick={() => goToAddAndress(navigate)}>
            <EditIcon />
          </button>
        </div>
      </Rectangle>
      <HistoricoPedido>
        <span>Histórico de pedidos</span>
      </HistoricoPedido>

      <ProfilePedidosVazios>
        {order === undefined ? (
          <span>Você não realizou nenhum pedido</span>
        ) : (
          <CardOrder history={history} />
        )}
      </ProfilePedidosVazios>
    </ContainerProfile>
  );
};

export default Profile;
