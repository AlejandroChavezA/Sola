import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button' 
const LandingPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/info');
      };
    return (
      <div className="landing-page" style={{ textAlign: 'center', padding: '20px' }}>
        <div className="content">
          <h1>Tormentas Solares: Mayo 2024</h1>
          <p>Descubre cómo las tormentas solares impactaron la Tierra y más allá.</p>
        </div>
        <div className="contentbtn">
        <Button label="Explorar más" onClick={handleClick} />
        </div>
        <div className="background-animation">
          <div className="sun"></div>
          <div className="solar-flare"></div>
        </div>
      </div>
    );
  };
    
export default LandingPage