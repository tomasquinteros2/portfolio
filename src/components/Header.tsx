import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Tomas Quinteros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Cambiamos la clase para alinear los links a la derecha */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        {/* El link de Skills se elimina porque ya está dentro de About */}
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;