import React from 'react';

function Select({ name, defaultValue, value, onChange, id, children, label }) {
  return (
    <div className="select">
      <label htmlFor={id}>{label}</label>
      <select defaultValue={defaultValue} value={value} onChange={onChange} name={name} id={id}>
        {children}
      </select>
    </div>
  );
}

export default Select;
