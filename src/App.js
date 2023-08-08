import React from 'react';
import './stylesheets/style.css';
import LandingPage from './pages/LandingPage';
import SideNavigation from './components/SideNav';

export default function App() {
  return (
    <div className="App">
      <SideNavigation/>
      <LandingPage />
    </div>
  );
}
