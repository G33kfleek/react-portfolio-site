import React from 'react';
import '../stylesheets/DefButton.css';
import { Link } from 'react-router-dom';

const DefButton = ({ icon, label, onClick,yo }) => {
  return (
      <button className="def-button" onClick={onClick}>
        <span className="icon">{icon}</span>
        <span className="label">{label}</span>
      </button>
  );
};

export default DefButton;
