import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation'; // 1. Importamos la animación
import '../style/Hero.css';
import profilePic from '../assets/profileAjustado.jpeg';

// 2. Creamos un array para los links sociales, más fácil de mantener
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tomasquinteros2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tomasquinteros1/' },
];

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Image src={profilePic} roundedCircle className="hero-profile-img mb-4" alt="Tomás Quinteros" />

                        <h1 className="display-3 fw-bold mb-3">Tomás Quinteros</h1>

                        {/* 3. Título animado */}
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer',
                                2000,
                                'Backend Specialist',
                                2000,
                                'Frontend Enthusiast',
                                2000,
                            ]}
                            wrapper="p"
                            speed={50}
                            className="lead fs-3 my-3 hero-subtitle"
                            repeat={Infinity}
                        />

                        <p className="text-muted-hero mt-4">
                            Tandil, Buenos Aires, Argentina
                            <br />
                            <a href="mailto:tomas.quinteros2002@gmail.com" className="hero-email-link">
                                tomas.quinteros2002@gmail.com
                            </a>
                        </p>

                        {/* 4. Botones de acción y links sociales */}
                        <div className="mt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/cv.pdf"
                                download="CV-Tomas-Quinteros-EN.pdf"
                                className="me-3"
                            >
                                Download CV
                            </Button>
                            {socialLinks.map(link => (
                                <Button
                                    key={link.name}
                                    variant="outline-secondary"
                                    size="lg"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-2 social-btn"
                                >
                                    {link.name}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;