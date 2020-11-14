import React from 'react';
import './index.css';

function Button({ children, type, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>{children}</button>
  );
}

export default Button;
