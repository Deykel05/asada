import React, { useState } from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
        <Container className="flex-row-reverse">
          <Navbar.Brand as={Link} to="/">Icono</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">             
              <NavDropdown title="Solicitudes" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/disponibilidad">Disponibilidad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/acerca" >Acerca de</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarComp;