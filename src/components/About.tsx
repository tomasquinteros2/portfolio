import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import '../style/About.css';

const skillCategories = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Microservices', 'JWT']
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Docker', 'Git']
  }
];

const About: React.FC = () => {
  return (
      <section id="about" className="py-5">
        <Container>
          {/* Mantenemos la sección de texto centrada */}
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <FadeInSection>
                <h2 className="mb-4">About Me</h2>
                <p className="lead about-text">
                  I'm a developer who enjoys building useful and easy-to-use applications. I love solving problems with code and I am always learning new technologies to improve my skills.
                </p>
                <p className="lead about-text">
                  Outside of coding, I am passionate about sports. This has taught me the importance of <strong>consistency and discipline</strong>, values I bring to every project I work on.
                </p>
                <hr className="my-5" />
                <h3 className="mb-5">My Skills</h3>
              </FadeInSection>
            </Col>
          </Row>

          {/* 2. Creamos una nueva sección para las categorías de habilidades */}
          <Row className="justify-content-center text-start">
            {skillCategories.map(category => (
                // Cada categoría ocupa su propio espacio para mayor claridad
                <Col md={10} lg={8} key={category.title} className="mb-4">
                  <FadeInSection>
                    <h4 className="skill-category-title">{category.title}</h4>
                    <div className="skills-container">
                      {category.skills.map(skill => (
                          <Badge bg="light" className="skill-badge" key={skill}>
                            {skill}
                          </Badge>
                      ))}
                    </div>
                  </FadeInSection>
                </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default About;