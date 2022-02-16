import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavbarComp from '../components/Navbar/NavBar';
import Acerca from '../components/paginas/Acerca';
import Disponibilidad from '../components/servicios/disponibilidad/Disponibilidad';
import Traspaso from '../components/servicios/traspasoPaja/Traspaso';
import Inicio from '../components/paginas/Inicio';
import Footer from '../components/footer/Footer';

const DashboardRoutes = () => {
    return (
        <>
            <NavbarComp />
            <Routes>
                <Route path='acerca' element={<Acerca />}></Route>
                <Route path='disponibilidad' element={<Disponibilidad />}></Route>
                <Route path='traspaso' element={<Traspaso />}></Route>
                <Route path='/' element={<Inicio />}></Route>

            </Routes>
            <Footer />

        </>
    )
}

export default DashboardRoutes