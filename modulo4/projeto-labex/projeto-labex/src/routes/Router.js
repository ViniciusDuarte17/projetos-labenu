import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import ErroPage from "../Pages/ErroPage/ErroPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";

export const Router = () => {
    return(
    <BrowserRouter >
     <Routes>
         <Route index element={<HomePage /> } />
         <Route path="login" element={<LoginPage /> } />
         <Route path="viagens" element={<ListTripsPage /> } />
         <Route path="inscreva-se" element={<ApplicationFormPage /> } />
         <Route path="admin" element={<AdminHomePage /> } />
         <Route path="/detail/:id" element={<TripDetailsPage /> } />
         <Route path="create" element={<CreateTripPage /> } />
         <Route path="*" element={<ErroPage /> } />
     </Routes>
    </BrowserRouter>
    )
}