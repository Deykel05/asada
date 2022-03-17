import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../imagenes/logo.png';
import '../../estilos/navbar/style.css';
const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container className="flex-row-reverse navegacion">
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solicitudes" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/disponibilidad">Disponibilidad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nuevaConexion">Nueva Conexion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/traspaso">Traspaso Paja</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/suspension">SuspensionServicio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inspeccion">Inspeccion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/queja">Sugerencias(Quejas)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/acerca" >Acerca de</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/login">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;