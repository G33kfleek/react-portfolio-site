import React, {useState, useEffect, useRef  } from 'react';
import  '../stylesheets/SideNav.css';
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
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="hamburger" onClick={(e) => { e.stopPropagation(); toggleSideNav(); }}>
          <FaBars />
        </div>
      </header>
      <div
        ref={sideNavRef}
        className={`sidenav ${isSideNavOpen ? 'open' : ''}`}
      >
        <a href="#">Home</a>
      </div>
    </div>
  );
}

export default SideNavigation;
