import React from 'react'
import { FaPlus, FaList } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { activeRequestOff } from '../../../actions/requests';
import logo from '../../../imagenes/logo.png';

const NavVertical = () => {
    const dispatch = useDispatch();
    const handleActiveOff = () => {
        dispatch(activeRequestOff());
    }
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">INICIO</div>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/admin/" onClick={handleActiveOff}>
                            <div className="sb-nav-link-icon" ><FaPlus /></div>
                            Solicitudes Nuevas
                        </NavLink>
                        <div className="sb-sidenav-menu-heading">REGISTRO</div>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/admin/historial" onClick={handleActiveOff}>
                            <div className="sb-nav-link-icon"><FaList /></div>
                            Historial de Solicitudes
                        </NavLink>
                    </div>

                </div>
                <div className="sb-sidenav-footer text-center">
                    <img src={logo} alt="logo" className="img-fluid" />
                </div>
            </nav>
        </div>
    )
}

export default NavVertical