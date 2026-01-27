import { Container } from "react-bootstrap";
import '../styles/SevenPillars.css';
import pillar from '../media/pillar.svg';

function SevenPillars() {
    return (
        <div className="background">
            <Container>
                <div className="row d-flex justify-content-center mt-5 mb-4">
                    <h2 className='title'>Seven Pillars</h2>
                </div>
                <div className="pillars-container">
                    <div className="pillar-wrapper-1 pillar-1">
                        <div className="pillar-title">
                            Youth Minister Coaching & Leadership Development
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-2 pillar-2">
                        <div className="pillar-title">
                            Personal & Spiritual Formation of the Youth Minister
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-3 pillar-3">
                        <div className="pillar-title">
                            Youth Ministry Program Excellence & Effectiveness
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-4 pillar-4">
                        <div className="pillar-title">
                            Core Team Formation & Volunteer Leadership
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-5 pillar-5">
                        <div className="pillar-title">
                            Ministry Systems, Structure & Discipleship Pathways
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-6 pillar-6">
                        <div className="pillar-title">
                            Pastor & Parish Alignment
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                    <div className="pillar-wrapper-7 pillar-7">
                        <div className="pillar-title">
                            Assessment, Measurement & Ongoing Growth
                        </div>
                        <img src={pillar} alt="Pillar" className="pillar-img" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SevenPillars;