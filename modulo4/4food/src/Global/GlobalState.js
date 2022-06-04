/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/BASE_URL'

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const headers = {
        headers: {
          auth: localStorage.getItem('token')
        }
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`, headers)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch (err => console.log(err))
    }

    const data = {
        restaurants,
        setRestaurants,
        restaurant,
        setRestaurant,
        products, 
        setProducts,
        headers,
        cart,
        setCart
    }

    return (
        <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState