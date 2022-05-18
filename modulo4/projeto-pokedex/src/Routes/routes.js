import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../pages/Details'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

export const Router = () => (
    <Routes>
        <Route index element={ <Home /> } />
        <Route path='pokedex' element={ <Pokedex /> } />
        <Route path='details/:id' element={ <Details /> } />
    </Routes> 
)
