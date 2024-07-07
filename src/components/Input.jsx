import React from 'react';

const Input = ({ label, type, value, onChange, error }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
