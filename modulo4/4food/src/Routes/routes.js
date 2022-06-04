import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register/RegisterClient'
import RegisterAddress from '../pages/Register/RegisterAddress'
import Feed from '../pages/Home/Feed'
import Restaurant from '../pages/Home/Restaurant'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import EditPage from '../pages/Profile/Edit/EditPage'
import AddAdress from '../pages/Profile/AddAndress/AddAdress'


export const Router = () => (
    <Routes>
        <Route index element={ <Feed /> } />
        <Route path='restaurante/:id' element={ <Restaurant /> } />
        <Route path='perfil' element={ <Profile /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='cadastro' element={ <Register /> } />
        <Route path='cadastroAddress' element={ <RegisterAddress /> } />
        <Route path='addAdress' element={ <AddAdress /> } />
        <Route path='carrinho' element={ <Cart /> } />
        <Route path='editar' element={ <EditPage />} />
       
    </Routes> 
)
