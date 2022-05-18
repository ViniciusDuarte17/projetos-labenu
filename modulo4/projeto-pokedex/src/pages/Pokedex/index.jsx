import React, { useContext } from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/coodinator'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import GlobalStateContext from '../../Global/GlobalStateContext'

function Pokedex() {
  const navigate = useNavigate()
  const { pokedex } = useContext(GlobalStateContext)

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Pokedex</Styled.Title>
        <Button onClick={() => goToHome(navigate)}>Home</Button>
      </Header>
      <Styled.Content>
      {pokedex && pokedex.map((poke) => {
            return <Card key={poke.name} poke={poke} isPokedex />
      })}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Pokedex