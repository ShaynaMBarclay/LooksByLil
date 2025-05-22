import React from 'react';
import "./styles/App.css";


import Portfolio from "./Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";
import Topbar from "./components/Topbar.jsx";

function App() {
  return (
    <>

    <div className="page-container">
      <Topbar />
      <Navbar/>
      <Portfolio/>
    </div>
    </>
  )
}

export default App