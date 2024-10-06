import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Explorar más');
    navigate('/info');
    console.log('Explorar más');
  };

  return (
    <div>
    <div className="content" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tormentas Solares: Mayo 2024</h1>
      <p>Descubre cómo las tormentas solares impactaron la Tierra y más allá.</p>
      </div>

        <button className='btn' onClick={handleClick}>testeo raro</button>
      {/* <Button label="Explorar más" onClick={handleClick} /> */}
      <div className="background-animation">
        <div className="sun"></div>
        <div className="solar-flare"></div>
      </div>
    </div>
  );
};

export default LandingPage;

