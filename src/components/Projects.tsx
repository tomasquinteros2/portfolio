import React from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import '../style/Projects.css';
import diagrama from '../assets/DiagramaServicios.jpg';
import monopatines from '../assets/monopatines-electricos.jpg';
import rattata from '../assets/rattata.png';

// La interfaz y los datos no necesitan cambios
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repoUrl: string;
  repoUrlBackend?: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    title: 'Ecopila Stock DataBase',
    description: 'Sistema full-stack con arquitectura Offline-First. Sincroniza una base de datos local con una en la nube, garantizando la continuidad del negocio ante caídas de internet.' +
        'Cuenta ADMIN: USER: admindev, PASS: 123456',
    imageUrl: diagrama,
    projectUrl: 'http://212.47.70.237/',
    repoUrl: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/frontend',
    repoUrlBackend: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/backend',
    technologies: ['JavaSpring', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker']
  },
  {
    title: 'Sistema de Monopatines',
    description: 'Sistema backend con arquitectura de microservicios. Gestiona el alta, mantenimiento y facturación de viajes de una red de monopatines, incluyendo pausas tarifadas.',
    imageUrl: monopatines,
    projectUrl: '/TPE-ArqWeb-2024.pdf',
    repoUrl: 'https://github.com/tomasquinteros2/Arquitecturas-WEB-Servicio-Monopatines',
    technologies: ['JavaSpring', 'Maven', 'JWT', 'Docker', 'MySQl']
  },
  {
    title: 'Página de Juegos',
    description: 'Una colección de mini-juegos interactivos desarrollados con JavaScript puro, HTML y CSS, enfocados en la manipulación del DOM y la lógica de juego del lado del cliente.',
    imageUrl: rattata,
    projectUrl: 'https://interfaces-one.vercel.app/',
    repoUrl: 'https://github.com/tomasquinteros2/interfaces/tree/main/tp3',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
];

// 2. Estructura del componente rediseñada
const Projects: React.FC = () => {
  return (
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Projects</h2>
          <Row>
            {projectData.map((project) => (
                // Cada proyecto es una columna en la cuadrícula
                <Col lg={8} md={10} className="mb-5 mx-auto" key={project.title}>
                  <FadeInSection>
                    <Card className="project-card shadow-sm h-100">
                      <Card.Img variant="top" src={project.imageUrl} className="project-card-img" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="project-title">{project.title}</Card.Title>
                        <Card.Text className="project-description">
                          {project.description}
                        </Card.Text>
                        <div className="mb-3">
                          {project.technologies.map(tech => (
                              <Badge pill bg="primary" className="me-1 mb-1 p-2" key={tech}>
                                {tech}
                              </Badge>
                          ))}
                        </div>
                        {/* Contenedor para alinear los botones al final */}
                        <div className="mt-auto">
                          <Button
                              as="a"
                              variant="dark"
                              href={project.projectUrl}
                              target="_blank"
                              download={project.projectUrl.endsWith('.pdf')}
                              className="me-2 mb-2"
                          >
                            {project.title === 'Sistema de Monopatines' ? 'View Assignment' : 'View Demo'}
                          </Button>

                          {project.repoUrlBackend ? (
                              <>
                                <Button variant="outline-dark" href={project.repoUrl} target="_blank" className="me-2 mb-2">
                                  Frontend
                                </Button>
                                <Button variant="outline-dark" href={project.repoUrlBackend} target="_blank" className="mb-2">
                                  Backend
                                </Button>
                              </>
                          ) : (
                              <Button variant="outline-dark" href={project.repoUrl} target="_blank" className="mb-2">
                                View Code
                              </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </FadeInSection>
                </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default Projects;