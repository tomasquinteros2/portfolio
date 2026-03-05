import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiChevronDown } from 'react-icons/fi';
import '../style/Hero.css';
import profilePic from '../assets/profileAjustado.jpeg';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <Container className="text-center hero-content">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        {/* Badge de disponibilidad */}
                        <div className="mb-3">
                            <span className="hero-available-badge">
                                <span className="available-dot"></span>
                                Available for work
                            </span>
                        </div>

                        {/* Foto de perfil */}
                        <Image
                            src={profilePic}
                            roundedCircle
                            className="hero-profile-img mb-4"
                            alt="Tomás Quinteros"
                        />

                        {/* Nombre */}
                        <h1 className="hero-name">Tomás Quinteros</h1>

                        {/* Título animado */}
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
                            className="hero-subtitle"
                            repeat={Infinity}
                        />

                        {/* Info de ubicación y contacto */}
                        <div className="d-flex flex-column align-items-center gap-1 mt-3 mb-4">
                            <div className="hero-info-item">
                                <FiMapPin size={14} />
                                <span>Tandil, Buenos Aires, Argentina</span>
                            </div>
                            <div className="hero-info-item">
                                <FiMail size={14} />
                                <a href="mailto:tomas.quinteros2002@gmail.com" className="hero-email-link">
                                    tomas.quinteros2002@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
                            <a
                                href="/QuinterosTomas.pdf"
                                download="TomasQuinteros-EN.pdf"
                                className="btn hero-btn-primary d-inline-flex align-items-center gap-2"
                            >
                                <FiDownload size={16} />
                                Download CV
                            </a>
                            <a
                                href="https://github.com/tomasquinteros2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn hero-btn-social"
                            >
                                <FiGithub size={16} />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tomasquinteros1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn hero-btn-social"
                            >
                                <FiLinkedin size={16} />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Indicador de scroll */}
            <div className="hero-scroll-indicator">
                <span>scroll</span>
                <FiChevronDown size={18} />
            </div>
        </section>
    );
};

export default Hero;

