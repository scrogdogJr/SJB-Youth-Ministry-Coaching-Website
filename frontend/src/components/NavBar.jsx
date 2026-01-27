import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar d-flex justify-content-center align-items-center">
      <Container fluid className="d-flex justify-content-center">
        <Nav className="navbar-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/our-approach">Our Approach</Nav.Link>
          <Nav.Link href="/seven-pillars">Seven Pillars</Nav.Link>
          <Nav.Link href="/meet-your-coach">Meet Your Coach</Nav.Link>
        </Nav>
      </Container>
      <div className='book-appointment-container d-flex align-items-center justify-content-center'>
        <a href="/contact" className="book-appointment-btn rounded-pill">Book an Appointment</a>
      </div>
      
    </Navbar>
  );
}

export default NavBar;
