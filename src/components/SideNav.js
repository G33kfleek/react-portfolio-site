import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/SideNav.css';
import Avatar from 'react-avatar';

import {
  FaBars,
  FaArrowLeft,
  FaHome,
  FaPhone,
  FaInfoCircle,
} from 'react-icons/fa';

function SideNavigation() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const sideNavRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setIsSideNavOpen(false);
    }
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="sidenav-cont">
      <header>
        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            toggleSideNav();
          }}
        >
          <FaBars />
        </div>
      </header>
      <div
        ref={sideNavRef}
        className={`sidenav ${isSideNavOpen ? 'open' : ''}`}
      >
        <div className="back-button-cont">
          <div className="back-button" onClick={toggleSideNav}>
            <FaArrowLeft />
          </div>
        </div>
        <div className="avatar-container">
          <Avatar
            name="Yalo Brad"
            size="150"
            round={true}
            color="#ff0000" // Set the background color to red
            githubHandle="g33kfleek"
          />
        </div>

        <div className="nav-links">
          <a href="#">
            <FaHome className="nav-icons" /> Home
          </a>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <FaInfoCircle className="nav-icons" />
              About
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#">Graphic Design</a>
                <a href="#"> Video Edits</a>
                <a href="#">Code Projects</a>
              </div>
            )}
            <a href="#">
              <FaPhone className="nav-icons" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
