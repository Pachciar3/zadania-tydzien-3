import React from 'react';
import './index.css';

function Input({ name, type, defaultValue, value, onChange, id, label }) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type} defaultValue={defaultValue} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
