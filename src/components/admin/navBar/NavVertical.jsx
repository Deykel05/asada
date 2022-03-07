import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaPlus, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../imagenes/logo.png';

const NavVertical = () => {

    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">INICIO</div>
                        <Nav.Link as={Link} to="/admin" >
                            <div className="sb-nav-link-icon"><FaPlus /></div>
                            Solicitudes Nuevas
                        </Nav.Link>
                        <div className="sb-sidenav-menu-heading">REGISTRO</div>
                        <Nav.Link as={Link} to="/admin/historial" >
                            <div className="sb-nav-link-icon"><FaList /></div>
                            Historial de Solicitudes
                        </Nav.Link>
                    </div>

                </div>
                <div className="sb-sidenav-footer text-center">
                <img src={logo} alt="logo" className="img-fluid"/>
                </div>
            </nav>
        </div>
    )
}

export default NavVertical