import React from 'react';
import '../stylesheets/DefButton.css';
import { Link } from 'react-router-dom';

const DefButton = ({ icon, label, onClick }) => {
  return (
    <Link to={to} className="icon-button">
      <button className="def-button" onClick={onClick}>
        <span className="icon">{icon}</span>
        <span className="label">{label}</span>
      </button>
    </Link>
  );
};

export default DefButton;
