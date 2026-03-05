import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import {
  FiCode, FiMonitor, FiDatabase, FiTerminal
} from 'react-icons/fi';
import {
  SiOpenjdk, SiSpring, SiNodedotjs, SiDocker, SiJsonwebtokens,
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiPostgresql, SiMysql, SiGit,
} from 'react-icons/si';
import '../style/About.css';

const skillCategories = [
  {
    title: 'Backend',
    icon: <FiCode size={20} />,
    skills: [
      { name: 'Java', icon: <SiOpenjdk /> },
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Microservices', icon: <FiTerminal /> },
      { name: 'JWT', icon: <SiJsonwebtokens /> },
    ]
  },
  {
    title: 'Frontend',
    icon: <FiMonitor size={20} />,
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss /> },
    ]
  },
  {
    title: 'Databases & Tools',
    icon: <FiDatabase size={20} />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Git', icon: <SiGit /> },
    ]
  }
];

const About: React.FC = () => {
  return (
      <section id="about" className="about-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <FadeInSection>
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle mb-0"></p>
              </FadeInSection>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4 mb-5">
            <Col lg={8}>
              <FadeInSection>
                <div className="about-text-card">
                  <p className="about-text">
                    I'm a developer who enjoys building useful and easy-to-use applications. I love solving problems with code and I am always learning new technologies to improve my skills.
                  </p>
                  <p className="about-text mb-0">
                    Outside of coding, I am passionate about sports. This has taught me the importance of <strong>consistency and discipline</strong>, values I bring to every project I work on.
                  </p>
                </div>
              </FadeInSection>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <FadeInSection>
                <h3 className="skills-title mb-4">Tech Stack</h3>
              </FadeInSection>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {skillCategories.map(category => (
                <Col md={4} key={category.title} className="mb-4">
                  <FadeInSection>
                    <div className="skill-category-card">
                      <div className="skill-category-header">
                        <span className="skill-category-icon">{category.icon}</span>
                        <h4 className="skill-category-title">{category.title}</h4>
                      </div>
                      <div className="skills-container">
                        {category.skills.map(skill => (
                            <span className="skill-badge" key={skill.name}>
                              <span className="skill-icon">{skill.icon}</span>
                              {skill.name}
                            </span>
                        ))}
                      </div>
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

