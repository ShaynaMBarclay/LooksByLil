import React from 'react';
import '../styles/Navbar.css';
import profileImg from '../assets/lilpfp.png';


function Navbar() {
  const name = "Lilly";

  return (
    <nav className="sidebar">
      <img
        src={profileImg}
        alt="Stylist"
        className="profile-pic"
      />
      
      
      <div className="vertical-name">
        {name.split('').map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;