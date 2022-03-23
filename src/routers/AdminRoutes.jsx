import React, { useState } from 'react'
import '../estilos/admin/styles.css';
import NavVertical from '../components/admin/navBar/NavVertical';

import Footer from '../components/footer/Footer';
import NavBarTop from '../components/admin/navBar/NavBarTop';
import ListaSolicitudes from '../components/admin/listaSolicitudes/ListaSolicitudes';
import { Route, Routes } from 'react-router-dom';
import Historial from '../components/admin/historialSolicitudes/Historial';

const AdminRoutes = () => {
    const [navVertical, setNavVertical] = useState(true)
    return (
        <div className={
            !navVertical ?
                'sb-nav-fixed sb-sidenav-toggled'
                : 'sb-nav-fixed '
        }>
            <NavBarTop
                setNavVertical={setNavVertical}
            />
            <div id="layoutSidenav">
                <NavVertical />
                <div id="layoutSidenav_content">

                    <Routes>
                        <Route path='historial' element={<Historial />}></Route>
                        <Route path='/' element={<ListaSolicitudes />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>


        </div>
    )
}

export default AdminRoutes;