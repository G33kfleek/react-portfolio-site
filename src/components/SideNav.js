import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/SideNav.css';
import avatarImage from '../assets/images/avatar-brad.jpeg'; // Replace with your avatar image

import { FaBars } from 'react-icons/fa';

function SideNavigation() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const sideNavRef = useRef(null);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
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
    <div className='sidenav-cont'>
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
        <div className="avatar-container">
          <img src={avatarImage} alt="Avatar" className="avatar-image" />
        </div>
      </header>
      <div
        ref={sideNavRef}
        className={`sidenav ${isSideNavOpen ? 'open' : ''}`}
      >
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Contact me</a>
      </div>
    </div>
  );
}

export default SideNavigation;
