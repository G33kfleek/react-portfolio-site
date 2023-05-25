import React, { useEffect, useRef } from 'react';
import '../stylesheets/LandingPage.css'; // Import the CSS file
import '../stylesheets/GeekAnimation.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SideNavigation from '../components/SideNav';
import DefButton from '../components/DefaultButton';
import { useSpring, animated } from 'react-spring';
import Typewriter from 'typewriter-effect';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

function LandingPage() {
  const styles = useSpring({ opacity: 1, from: { opacity: 0 } });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="landing-page">
      {/* Rest of the LandingPage component */}
      <animated.div style={styles}>
        <div className="welcome-screen">
          <Element name="section0" className="section">
            <SideNavigation />
          </Element>
          <Element name="section1" className="section">
            <div className="welcome-content">
              <h1>Welcome!</h1>
              <div className="name-container">
                <span className="cursor"></span>
                <div className="name">
                  <Typewriter
                    options={{
                      strings: [
                        'This is my Portfolio Website',
                        "I'm Yalo Bradburry.",
                        "I'm a Developer💻.",
                        'Graphic Designer✨.',
                        'and a Video Editor🎞🎮.',
                      ],
                      autoStart: true,
                      delay: 50,
                      loop: true,
                    }}
                  />
                </div>
              </div>
              <DefButton label="Work Links" />
            </div>
          </Element>
          <Element name="section2" className="section">
            <div className="scroll-content">
              {/* <p>I am skilled in:</p>
              <ul className="skills-container">
                  <div className="skill">Graphic Design</div>
                  <div className="skill">Coding</div>
                  <div className="skill">Video Editing</div>
              </ul> */}
              <Typewriter
                options={{
                  strings: [
                    'Website is still Development 🛠⛏💻',
                    'Coming Soon...',
                    "Here's my Contacts though😎",
                    'Phone : +254 798362712',
                    'Email: braddconnel@gmail.com',
                  ],
                  autoStart: true,
                  delay: 80,
                  loop: true,
                }}
              />
            </div>
          </Element>
        </div>
        <ScrollToTopButton />
      </animated.div>
    </div>
  );
}

export default LandingPage;
