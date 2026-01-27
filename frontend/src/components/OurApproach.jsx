import { Container } from "react-bootstrap";
import '../styles/OurApproach.css';
import { useEffect } from 'react';

function OurApproach() {

  return (
    <div className="background">
      <Container className="mb-4 mt-2">
        <div className="row d-flex justify-content-center mt-5">
          <h2 className='approach-title'>Our Approach</h2>
          <p className='approach-text mx-5'>
            Bosco Coaching takes a relational, mission-first approach to youth ministry coaching.
            We believe youth ministry flourishes when leaders are supported, vision is clear, and structures are built to last. Rather than offering programs or templates to copy, we walk alongside youth ministers and parish leadership to help them build cultures where evangelization, hospitality, and discipleship can take root and grow.       
            <mark>Our approach is...</mark>
          </p>

        </div>
        <div className="row d-flex justify-content-center">
          <div className="maroon-boxes-container">
            <div className="maroon-box maroon-box-1">
              <h3>Encounter-Centered</h3>
              <p>We believe true transformation begins when people personally encounter Jesus Christ.</p>
            </div>
            <div className="maroon-box maroon-box-2">
              <h3>Relational Accompaniment</h3>
              <p>We walk alongside youth ministers and parish leadership with care, trust, and presence as they grow in clarity, confidence, and mission.</p>
            </div>
            <div className="maroon-box maroon-box-3">
              <h3>Joyful and Hope-Filled</h3>
              <p>We believe joy, fun, and warmth create environments where people feel safe to belong, grow, and be transformed.</p>
            </div>
            <div className="maroon-box maroon-box-4">
              <h3>Culture-Driven</h3>
              <p>We focus on shaping healthy ministry culture because lasting fruit flows from who we are becoming, not just what we are doing.</p>
            </div>
            <div className="maroon-box maroon-box-5">
              <h3>Sustainable and Practical</h3>
              <p>We build ministries and leaders that are practical, parish-realistic, and supported by systems that can be sustained over time.</p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center outcomes-section-wrapper">
          <h2 className='outcomes-section-title'>Expected Outcomes</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="blue-boxes-container">
            <div className="blue-box blue-box-1 d-flex flex-column">
              <h3>Confidence-Filled</h3>
              <p>A confident, clear, and mission-anchored youth minister</p>
            </div>
            <div className="blue-box blue-box-2 d-flex flex-column">
              <h3>Strength</h3>
              <p>Noticeably stronger and more consistent Youth Nights and events</p>
            </div>
            <div className="blue-box blue-box-3 d-flex flex-column">
              <h3>Stellar Core Team</h3>
              <p>A Core Team that is well trained, unified, committed, and invested</p>
            </div>
            <div className="blue-box blue-box-4 d-flex flex-column">
              <h3>Christ-Centered Teens</h3>
              <p>Teens who feel known, welcomed, and challenged to grow</p>
            </div>
            <div className="blue-box blue-box-5 d-flex flex-column">
              <h3>Aligned Ministry</h3>
              <p>A youth ministry aligned with evangelization, discipleship, and parish life</p>
            </div>
            <div className="blue-box blue-box-6 d-flex flex-column">
              <h3>Balance</h3>
              <p>A structure that supports work-life balance and long-term sustainability</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurApproach;