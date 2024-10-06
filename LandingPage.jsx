import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './style.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/info');
  };

  return (
    <div>
    <div className="content" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tormentas Solares: Mayo 2024</h1>
      <p>Descubre cómo las tormentas solares impactaron la Tierra y más allá.</p>
      </div>
      <div className="contentBtn">
      <Button label="Explorar más" onClick={handleClick} />
      </div>
      <div className="background-animation">
        <div className="sun"></div>
        <div className="solar-flare"></div>
      </div>
    </div>
  );
};

export default LandingPage;

