import React from 'react';
import { Container, Card } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi';
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
  isPdf?: boolean;
}

const projectData: Project[] = [
  {
    title: 'Ecopila Stock DataBase',
    description: 'Full-stack system with Offline-First architecture. Synchronizes a local database with the cloud, ensuring business continuity during internet outages. ADMIN: USER: admindev, PASS: 123456',
    imageUrl: diagrama,
    projectUrl: 'http://212.47.70.237/',
    repoUrl: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/frontend',
    repoUrlBackend: 'https://github.com/tomasquinteros2/ProyectoBaseOffline-First/tree/main/backend',
    technologies: ['Java Spring', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker']
  },
  {
    title: 'Electric Scooter System',
    description: 'Backend system with microservices architecture. Manages registration, maintenance, and billing for a scooter network, including paid pauses.',
    imageUrl: monopatines,
    projectUrl: '/TPE-ArqWeb-2024.pdf',
    repoUrl: 'https://github.com/tomasquinteros2/Arquitecturas-WEB-Servicio-Monopatines',
    technologies: ['Java Spring', 'Maven', 'JWT', 'Docker', 'MySQL'],
    isPdf: true,
  },
  {
    title: 'VitalifitSupps',
    description: 'Online sports supplements store built with Next.js 14, TypeScript, Tailwind CSS and Firebase. Features an admin panel to manage products and promotions in real time.',
    imageUrl: vitalifit,
    projectUrl: 'https://www.vitalifitsupps.com.ar/',
    repoUrl: 'https://github.com/tomasquinteros2/vitalifit',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase']
  },
  {
    title: 'Mini-Games Collection',
    description: 'A collection of interactive mini-games, including Connect Four, built with vanilla JavaScript and CSS — no frameworks, no AI. Features custom animations and game logic via pure DOM manipulation.',
    imageUrl: rattata,
    projectUrl: 'https://interfaces-one.vercel.app/html/game.html',
    repoUrl: 'https://github.com/tomasquinteros2/interfaces/tree/main/tp3',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
];

const Projects: React.FC = () => {
  return (
      <section id="projects" className="projects-section py-5">
        <Container>
          <div className="text-center mb-5">
            <FadeInSection>
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Some things I've built</p>
            </FadeInSection>
          </div>

          <div className="projects-grid">
            {projectData.map((project, index) => (
                <FadeInSection key={project.title}>
                  <Card className="project-card h-100">
                    {/* Imagen con overlay */}
                    <div className="project-img-wrapper">
                      <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="project-card-img"
                      />
                      <div className="project-img-overlay" />
                      <span className="project-number">#{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>

                      {/* Tech badges */}
                      <div className="tech-badges">
                        {project.technologies.map(tech => (
                            <span className="tech-badge" key={tech}>{tech}</span>
                        ))}
                      </div>

                      {/* Botones */}
                      <div className="project-actions">
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={project.isPdf ? 'TPE-ArqWeb-2024.pdf' : undefined}
                            className="project-btn project-btn-primary"
                        >
                          {project.isPdf
                              ? <><FiDownload size={13} /> Assignment</>
                              : <><FiExternalLink size={13} /> Live Demo</>
                          }
                        </a>

                        {project.repoUrlBackend ? (
                            <>
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
                                <FiGithub size={13} /> Frontend
                              </a>
                              <a href={project.repoUrlBackend} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
                                <FiGithub size={13} /> Backend
                              </a>
                            </>
                        ) : (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
                              <FiGithub size={13} /> View Code
                            </a>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </FadeInSection>
            ))}
          </div>
        </Container>
      </section>
  );
};

export default Projects;

