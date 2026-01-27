import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css';
import logo from '../media/Wolf_and_Sun.png';
import title from '../media/title.png';
import hero from '../media/hero.jpeg';
import fun from '../media/fun.JPG';
import church from '../media/church.svg';
import priest from '../media/priest.svg';
import people from '../media/people.svg';

function Home() {
  return (
    <div className="App">
      
      <Container className="mb-4 mt-2">
        <div className="text-center text-white d-flex flex-column justify-content-center align-items-center">
          <img src={logo} alt="Logo" className="logo-img my-0"/>
          <img src={title} alt="Title" className="title-img mb-3"/>
        </div>

        <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-12">
            <h4 className='hero-title'>Building Transformative Youth Ministry</h4>
            <img src={hero} alt="Hero" className="hero-img mt-2"/>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5 mission">
          <h2 className='mission-title'>Mission</h2>
          <p className='mission-text'>
            Equip Catholic youth ministers and church leaders to build Spirit-led cultures where teens encounter Christ, experience deep belonging, and become joyful missionary disciples.
          </p>
        </div>

        <div className="row d-flex justify-content-space-between mt-5">
          <div className="col-6 mb-3">
            <p className='who'><mark>Bosco Coaching</mark> is For...</p>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <h3>Pastors</h3>
                  <img src={priest} alt="Priest" className='priest-icon'/>
                </div>
                <div className="flip-face flip-back">
                  <p>
                    Who want youth ministry to thrive and serve as a vital part of parish life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-space-between">
          <div className="col-6 mb-3 d-flex justify-content-right">
            <img src={fun} alt="Fun" className="fun-img"/>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <h3>Youth Ministers</h3>
                  <img src={people} alt="youth ministers" className='card-icon'/>
                </div>
                <div className="flip-face flip-back">
                  <p>
                    Who feel overwhelmed, ill-equipped, or stuck in survival mode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-space-between">
          <div className="col-6 mb-3">
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <h3>Parishes</h3>
                  <img src={church} alt="parishes" className='card-icon'/>
                </div>
                <div className="flip-face flip-back">
                  <p>
                    That are ready to move from maintenance to MISSION!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;