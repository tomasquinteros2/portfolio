import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Obtenemos las variables de entorno
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
        .then(
            () => {
              setStatus('success');
              form.current?.reset(); // Limpia el formulario
              setTimeout(() => setStatus('idle'), 5000); // Vuelve al estado inicial después de 5s
            },
            (error) => {
              console.log('FAILED...', error.text);
              setStatus('error');
              setTimeout(() => setStatus('idle'), 5000);
            }
        );
  };

  return (
      <section id="contact" className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center mb-4">
                <h2>Contact Me</h2>
                <p className="lead">Have a question or want to work together? Leave your details below.</p>
              </div>

              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                      type="text"
                      name="name" // Este 'name' debe coincidir con la variable en la plantilla de EmailJS
                      placeholder="Enter your name"
                      required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                      type="email"
                      name="email" // Coincide con {{email}}
                      placeholder="Enter your email"
                      required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                      as="textarea"
                      name="message" // Coincide con {{message}}
                      rows={4}
                      placeholder="Your message"
                      required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                        <>
                          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                          <span className="ms-2">Sending...</span>
                        </>
                    ) : (
                        'Send Message'
                    )}
                  </Button>
                </div>
              </Form>

              {status === 'success' && (
                  <Alert variant="success" className="mt-4">
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
              )}
              {status === 'error' && (
                  <Alert variant="danger" className="mt-4">
                    Something went wrong. Please try again later.
                  </Alert>
              )}

              <div className="text-center mt-5">
                <p>Or find me on:</p>
                <Button variant="outline-dark" href="https://github.com/tomasquinteros2" target="_blank" className="m-2">
                  GitHub
                </Button>
                <Button variant="outline-dark" href="https://www.linkedin.com/in/tomasquinteros1/" target="_blank" className="m-2">
                  LinkedIn
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Contact;