import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OurApproach from './components/OurApproach';
import MeetYourCoach from './components/MeetYourCoach';
import SevenPillars from './components/SevenPillars';
import './App.css';
import './styles/custom.css';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/meet-your-coach" element={<MeetYourCoach />} />
        <Route path="/seven-pillars" element={<SevenPillars />} />
      </Routes>
    </>
  );
}

export default App;
