import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <a href="#explore" className="btn" onClick={onClick}>
      {label}
    </a>
  );
};

export default Button;
