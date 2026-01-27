import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>SJB Youth Ministry Coaching</h5>
            <p className="text-muted">
              Empowering youth ministries to make a lasting impact.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p className="text-muted">
              Email: info@sjbyouth.com<br />
              Phone: (555) 123-4567
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} SJB Youth Ministry Coaching. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
