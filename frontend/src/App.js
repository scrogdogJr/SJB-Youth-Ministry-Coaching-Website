import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import './styles/custom.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Container className="my-5">
        <div className="text-center mb-5">
          <h1>Welcome to SJB Youth Ministry Coaching</h1>
          <p className="lead text-muted">
            Empowering youth leaders to build vibrant, faith-filled communities
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="custom-card">
              <h3>Our Mission</h3>
              <p>
                To equip and inspire youth ministry leaders with the tools, 
                training, and community they need to transform young lives.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card">
              <h3>Our Approach</h3>
              <p>
                We provide personalized coaching, practical resources, and 
                ongoing support tailored to your ministry's unique needs.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card">
              <h3>Get Started</h3>
              <p>
                Ready to take your youth ministry to the next level? 
                Contact us today to schedule a consultation.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
