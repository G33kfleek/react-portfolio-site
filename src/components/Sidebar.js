import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaBars } from 'react-icons/fa';
import '../stylesheets/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarAnimation = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(-280px)',
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <animated.div className="sidebar" style={sidebarAnimation}>
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <nav className="sidebar-nav">
        {/* Sidebar navigation links */}
      </nav>
      {/* Main content */}
    </animated.div>
  );
}

export default Sidebar;
