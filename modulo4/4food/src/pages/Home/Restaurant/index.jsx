import React, { useEffect, useContext } from 'react'

import * as Styled from './styled'
import Header from '../../../components/Header'
import CardProduct from '../../../components/CardProduct'
import { useNavigate, useParams } from "react-router-dom"
import { goToFeed } from "../../../Routes/coodinator"
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import GlobalStateContext from '../../../Global/GlobalStateContext'
import axios from 'axios'
import { BASE_URL } from '../../../constants/BASE_URL'

const Restaurant = (props) => {
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const { restaurant, setRestaurant, products, setProducts, headers, cart, setCart } = useContext(GlobalStateContext)
  // const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    const getDetailRestaurant = async () => {
      const res = await axios
      .get(`${BASE_URL}/restaurants/${params.id}`, headers)
      try {
        setRestaurant(res.data.restaurant)
        setProducts(res.data.restaurant.products)
      } catch (error) {
        console.log("ERROR", error.response)
      }
    }
    getDetailRestaurant()
  }, [])

  const price = Number(restaurant.shipping)

  const addItemToCart = (newItem) => {
    const index = cart.findIndex( (i) => i.id === newItem.id)
    
    const newCart = [...cart]

    if(index === -1){
      const cartItem = {...newItem, amount: 1, nameRestaurant: restaurant.name, deliveryTime: restaurant.deliveryTime, shipping: restaurant.shipping, idRes: restaurant.id }
      newCart.push(cartItem)
    } else {
      newCart[index].amount += 1
    }
    setCart(newCart)
    // localStorage.setItem("carrinho", JSON.stringify(newCart))
    // console.log("50", newCart)
  }

  return (
    <div>
        <Header>
            <Button onClick={() => goToFeed(navigate)}>
              <ArrowBackIosNewIcon />
            </Button>
            <h2>Restaurante</h2>
            <div></div>
            <div></div>
        </Header>
        <Styled.Container>
          <Styled.Content>
            <Styled.Img src={restaurant.logoUrl} alt='' />
            <Styled.Title>{restaurant.name}</Styled.Title>
            <Styled.P>{restaurant.category}</Styled.P>
            <Styled.DetailDelivery>
                <Styled.P>{restaurant.deliveryTime -10} - {restaurant.deliveryTime} min</Styled.P>
                <Styled.P>Frete R${price.toFixed(2)}</Styled.P>
            </Styled.DetailDelivery> 
            <Styled.P>{restaurant.address}</Styled.P>
          </Styled.Content>
          <Styled.ContentProducts>
            {
              products ?
              products.map((product) => {
                return <CardProduct key={product.id} product={product} addItemToCart={addItemToCart}/>
              }) :
              null
            }
          </Styled.ContentProducts>
        </Styled.Container>
    </div>
  )
}

export default Restaurant