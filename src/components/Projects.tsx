import React from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import '../style/Projects.css';
import diagrama from '../assets/DiagramaServicios.jpg';
import monopatines from '../assets/monopatines-electricos.jpg';
import rattata from '../assets/rattata.png';
import vitalifit from '../assets/vitalifit.png';

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
    description: 'Full-stack system with Offline-First architecture. Synchronizes a local database with the cloud, ensuring business continuity during internet outages.' +
        ' ADMIN Account: USER: admindev, PASS: 123456',
    imageUrl: diagrama,
    projectUrl: 'http://212.47.70.237/',
    repoUrl: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/frontend',
    repoUrlBackend: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/backend',
    technologies: ['JavaSpring', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker']
  },
  {
    title: 'Electric Scooter System',
    description: 'Backend system with microservices architecture. Manages registration, maintenance, and billing for a scooter network, including paid pauses.',
    imageUrl: monopatines,
    projectUrl: '/TPE-ArqWeb-2024.pdf',
    repoUrl: 'https://github.com/tomasquinteros2/Arquitecturas-WEB-Servicio-Monopatines',
    technologies: ['JavaSpring', 'Maven', 'JWT', 'Docker', 'MySQl']
  },
  {
    title: 'VitalifitSupps',
    description: 'Online sports supplements store built with Next.js 14, TypeScript, Tailwind CSS and Firebase. Features an admin panel to manage products and promotions in real time.',
    imageUrl: vitalifit,
    projectUrl: 'https://www.vitalifitsupps.com.ar/',
    repoUrl: 'https://github.com/tomasquinteros2/vitalifit',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Lucide React']
  },
  {
    title: 'Mini-Games Collection',
    description: 'A collection of interactive mini-games, including a Connect Four game, built entirely by hand using vanilla JavaScript and CSS — no AI involved. Features custom animations and game logic developed from scratch through pure DOM manipulation',
    imageUrl: rattata,
    projectUrl: 'https://interfaces-one.vercel.app/html/game.html',
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
                            {project.title === 'Electric Scooter System' ? 'View Assignment' : 'View Demo'}
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