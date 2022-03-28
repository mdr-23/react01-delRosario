import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function NavBar() {

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Productos 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Productos 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Productos 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Registrarse
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}