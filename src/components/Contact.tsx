import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import '../style/Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || !serviceID || !templateID || !publicKey) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        });
  };

  return (
      <section id="contact" className="contact-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Have a question or want to work together?</p>
          </div>

          <Row className="justify-content-center g-4">
            {/* Panel izquierdo con info */}
            <Col md={5} lg={4}>
              <div className="contact-info-card">
                <h4 className="contact-info-heading">Let's talk</h4>
                <p className="contact-info-text">
                  I'm always open to discuss new projects, creative ideas or opportunities to be part of something great.
                </p>

                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <span className="contact-info-icon"><FiMail size={16} /></span>
                    <a href="mailto:tomas.quinteros2002@gmail.com" className="contact-info-link">
                      tomas.quinteros2002@gmail.com
                    </a>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-icon"><FiMapPin size={16} /></span>
                    <span className="contact-info-text-sm">Tandil, Buenos Aires, Argentina</span>
                  </div>
                </div>

                <div className="contact-socials">
                  <a href="https://github.com/tomasquinteros2" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/tomasquinteros1/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </Col>

            {/* Formulario */}
            <Col md={7} lg={6}>
              <div className="contact-form-card">
                <Form ref={form} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Your name" required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="your@email.com" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={5} placeholder="Your message..." required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <button type="submit" className="contact-submit-btn" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                            <>
                              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                              <span className="ms-2">Sending...</span>
                            </>
                        ) : (
                            <>
                              <FiSend size={15} />
                              Send Message
                            </>
                        )}
                      </button>
                    </Col>
                  </Row>
                </Form>

                {status === 'success' && (
                    <Alert variant="success" className="mt-3 contact-alert-success">
                      ✓ Message sent! I'll get back to you soon.
                    </Alert>
                )}
                {status === 'error' && (
                    <Alert variant="danger" className="mt-3 contact-alert-error">
                      ✗ Something went wrong. Please try again.
                    </Alert>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Contact;

