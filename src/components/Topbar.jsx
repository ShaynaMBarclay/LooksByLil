import React from 'react';
import '../styles/Topbar.css';
import logoImg from '../assets/lilylogo.webp';

function Topbar() {
  return (
     <header className="topbar">
      <img src={logoImg} alt="Looks by Lil Logo" className="topbar-logo" />
      <a
        href="https://www.looksbylil.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="glow-button"
      >
        Book Here
      </a>
    </header>
  );
}

export default Topbar;
