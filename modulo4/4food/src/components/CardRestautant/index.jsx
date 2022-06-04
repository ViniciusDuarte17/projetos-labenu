import React from 'react'

import * as Styled from './styled'
import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../Routes/coodinator"
import { useProtectedPage } from '../../hooks/useProtectedPage'

const CardRestautant = (props) => {
  useProtectedPage()
  const navigate = useNavigate()

  const { restaurant } = props

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
  }

  return (
    <Styled.Container onClick={() => goToTop(goToRestaurant(navigate, restaurant.id))} >
        <Styled.Img src={restaurant.logoUrl} alt={restaurant.name} />
        <Styled.Footer>
            <Styled.Title>{restaurant.name}</Styled.Title>
            <Styled.Content>
                <Styled.P>{restaurant.deliveryTime -10} - {restaurant.deliveryTime} min</Styled.P>
                <Styled.P>Frete R${restaurant.shipping.toFixed(2)}</Styled.P>
            </Styled.Content>
        </Styled.Footer>
    </Styled.Container>
  )
}

export default CardRestautant