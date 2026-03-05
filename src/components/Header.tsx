import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../style/Header.css';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            collapseOnSelect
            className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand-custom">
                    <span className="brand-bracket">&lt;</span>
                    TQ
                    <span className="brand-bracket"> /&gt;</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {navLinks.map(link => (
                            <Nav.Link key={link.href} href={link.href} className="nav-link-custom">
                                {link.label}
                            </Nav.Link>
                        ))}
                        <Nav.Link
                            href="/QuinterosTomas.pdf"
                            download="Tomas-Quinteros.pdf"
                            className="nav-link-cv"
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

