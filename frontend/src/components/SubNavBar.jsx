import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/SubNavBar.css';

function SubNavBar() {
  return (
    <Navbar expand="lg" className="custom-subnavbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default SubNavBar;