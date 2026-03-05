import React from 'react';
import { Container } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import '../style/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="portfolio-footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-bracket">&lt;</span>
            TQ
            <span className="footer-bracket"> /&gt;</span>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/tomasquinteros2" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tomasquinteros1/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:tomas.quinteros2002@gmail.com" className="footer-social-link" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>

          <p className="footer-copy">
            Built with <FiHeart size={12} className="footer-heart" /> by Tomás Quinteros &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;


