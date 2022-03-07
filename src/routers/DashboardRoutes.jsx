import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavbarComp from '../components/Navbar/NavBar';
import Acerca from '../components/paginas/Acerca';
import Disponibilidad from '../components/servicios/disponibilidad/Disponibilidad';
import Traspaso from '../components/servicios/traspasoPaja/Traspaso';
import Inicio from '../components/paginas/Inicio';
import Footer from '../components/footer/Footer';
import NuevaConexion from '../components/servicios/nuevaConexion/NuevaConexion';
import Inspeccion from '../components/servicios/inspeccion/Inspeccion';
import Queja from '../components/servicios/queja/Queja';

const DashboardRoutes = () => {
    return (
        <>
            <NavbarComp />
            <Routes>
                <Route path='acerca' element={<Acerca />}></Route>
                <Route path='disponibilidad' element={<Disponibilidad />}></Route>
                <Route path='nuevaConexion' element={<NuevaConexion />}></Route>
                <Route path='traspaso' element={<Traspaso />}></Route>
                <Route path='inspeccion' element={<Inspeccion />}></Route>
                <Route path='queja' element={<Queja />}></Route>
                <Route path='/' element={<Inicio />}></Route>

            </Routes>
            <Footer />

        </>
    )
}

export default DashboardRoutes