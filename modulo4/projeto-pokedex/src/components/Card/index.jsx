import React, { useContext } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Routes/coodinator"
import { Button } from "../Button"
import GlobalStateContext from '../../Global/GlobalStateContext'


const Card = (props) => {
  const navigate = useNavigate()
  const { poke, isPokedex } = props
  const { pokemon, setPokemon, pokedex, setPokedex } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeIndex = pokemon.findIndex(
      (item) => item.name === poke.name
    )
    const newPokeList = [...pokemon]
    newPokeList.splice(pokeIndex, 1)
    const orderedPokemon = newPokeList.sort((a, b) => {
      return a.id - b.id
    })

    const newPokedexList = [...pokedex, poke]
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemon(orderedPokemon)
    setInLocalStorage("pokedex", orderedPokedex)
    setInLocalStorage("pokemon", orderedPokemon)
  }

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === poke.name
    )

    const newPokeList = [...pokedex]
    newPokeList.splice(pokeIndex, 1)
    const orderedPokedex = newPokeList.sort((a, b) => {
      return a.id - b.id
    })

    const newPokemonsList = [...pokemon, poke]
    const orderedPokemon = newPokemonsList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemon(orderedPokemon)
    setInLocalStorage("pokedex", orderedPokedex)
    setInLocalStorage("pokemon", orderedPokemon)
  }

  const setInLocalStorage = (keyName, value) => {
    try {
        localStorage.setItem(keyName, JSON.stringify(value))
    } catch (error) {
        console.log('Error in local storage', error)
        setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)))
    }
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title name={poke.name}>{poke.name}</Styled.Title>
        <Styled.Img src={poke.sprites.front_default} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
          {isPokedex ? "Remove" : "Add"}
        </Button>
        <Button onClick={() => goToDetails(navigate, poke.name)}>Details</Button>
      </Styled.FooterCard>
    
    </Styled.Container>
  )
}

export default Card