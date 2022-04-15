import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget"; 
import { Link } from "react-router-dom";

export default function NavBar() {

  const linkStyle = {
    textDecoration: "none",
    color: "red",
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to={`/`} style={linkStyle}>Stephen King's</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to={`/category/books`} style={linkStyle}> Libros </Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={`/category/movies`} style={linkStyle}>Películas</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={`/category/action-figures`} style={linkStyle}>Figuras de acción</Link></NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <CartWidget />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}