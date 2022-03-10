import React from 'react'
import { FaBars, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth';

const NavBarTop = ({ setNavVertical }) => {
   
    const dispatch = useDispatch();

    const handleSidebar = () => {
        setNavVertical(nav => !nav);
    }
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <a className="navbar-brand ps-3" >ASADA Florida</a>
            {/* <!-- Sidebar Toggle--> */}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={handleSidebar} ><FaBars /></button>

            {/* <!-- Navbar--> */}
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarTop