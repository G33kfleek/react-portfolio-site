import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUpCircle } from 'react-icons/fi';
import '../stylesheets/ScrollToTop.css';

function ScrollToTopButton() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className="scroll-top-btn" onClick={scrollToTop}>
      <FiArrowUpCircle className="up-arrow-icon" />
    </button>
  );
}

export default ScrollToTopButton;
