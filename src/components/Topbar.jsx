import React from 'react';
import '../styles/Topbar.css';

function Topbar() {
  return (
    <header className="topbar">
           <div className="topbar-title">Looks by Lil</div>
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
