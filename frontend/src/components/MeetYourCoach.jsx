import { Container } from "react-bootstrap";
import '../styles/MeetYourCoach.css';
import scott from '../media/Scott.png';

function MeetYourCoach() {
  return (
    <div className="meet-coach-background">
        <div className="row d-flex justify-content-center my-5">
          <h2 className='coach-title'>Meet Your Coach</h2>
        </div>
        <Container className="coach-content">
          <div className="row d-flex align-items-center h-100">
            <div className="col-5 d-flex justify-content-start">
              <img src={scott} alt="Scott" className="coach-img"/>
            </div>
            <div className="col-7 coach-text">
                <h3 className="coach-name">Scott Bagshaw</h3>
                <p>
                    Scott Bagshaw loves Jesus, loves fun, and loves having fun helping others encounter Jesus. At his core, Scott believes youth ministry should be joyful, engaging, and life-giving, while also creating space for moments of real depth and encounter. For him, joy is often the doorway to transformation.
                </p>
                <p>
                    His heart for ministry has been shaped through relationship. Walking with young people through honest questions, difficult life moments, and profound encounters with God has given Scott a deep appreciation for the responsibility youth ministers hold in creating spaces where teens can discover and lean into who God created them to be.
                </p>
                <p>
                    Scott has spent more than 20 years in parish youth ministry. He holds a Communications degree from Arizona State University, is a Certified Life Coach, Spiritual Director, a graduate of Encounter School of Ministry, and has served as a Director with Alpha USA for seven years. He is passionate about integrating practical leadership, spiritual formation, and lived experience to support and strengthen Catholic youth ministry.
                </p>
                <p>
                    Scott and his wife, Jill, have dedicated their lives to ministry throughout their 25-year marriage. They are the parents of three adult children and continue to serve the Church with gratitude, joy, and deep trust in God’s faithfulness.
                </p>
            </div>
          </div>
        </Container>
    </div>
  );
}

export default MeetYourCoach;
