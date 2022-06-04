import React, { useContext, useState } from "react";

import * as Styled from "./styled";
import Header from "../../../components/Header";
// import { useNavigate } from "react-router-dom"
// import { goToRestaurant } from "../../../Routes/coodinator"
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import CardRestautant from "../../../components/CardRestautant";
import GlobalStateContext from "../../../Global/GlobalStateContext";
import {
  SearchContainer,
  IconButton,
  SearchInput,
} from "../../../components/SearchBar/styles";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from '../../../components/Footer'

const Feed = () => {
  useProtectedPage();
  // const navigate = useNavigate()
  const { restaurants } = useContext(GlobalStateContext);

  const [query, setQuery] = useState("");

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Styled.Container>
      <Header>
        <h2>ifuture</h2>
      </Header>

      <SearchContainer>
        <IconButton>
          <AiOutlineSearch size={22}/>
        </IconButton>
        <SearchInput
          placeholder="Restaurante"
          value={query}
          onChange={updateQuery}
        />
      </SearchContainer>
      {restaurants.length > 0 ? (
        restaurants
          .filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((restaurant) => {
            return (
              <CardRestautant key={restaurant.id} restaurant={restaurant} />
            );
          })
      ) : (
        <h1>Loading</h1>
      )}

      <Footer />
    </Styled.Container>
  );
};

export default Feed;
