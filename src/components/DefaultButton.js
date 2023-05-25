import React from 'react';
import "../stylesheets/DefButton.css"
const DefButton = ({ icon, label, onClick }) => {
  return (
    <button className="def-button" onClick={onClick}>
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </button>
  );
};

export default DefButton;