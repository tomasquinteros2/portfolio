import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <small>Copyright &copy; {new Date().getFullYear()} - Quinteros Tomas</small>
      </Container>
    </footer>
  );
};

export default Footer;
