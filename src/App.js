import React from 'react';
import './App.css';
import logo from './imagenes/logo.png';
import video1 from './imagenes/lago.mp4';
import Tienda from './Tienda';
import Tecnologia from './Tecnologia';
import Ciberseguridad from './Ciberseguridad';
import Contacto from './Contacto';

const App = () => {
  const handleHomeButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTiendaButtonClick = () => {
    const tiendaSection = document.getElementById('tienda-section');
    tiendaSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTecnologiaButtonClick = () => {
    const tecnologiaSection = document.getElementById('tecnologia-section');
    tecnologiaSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCiberseguridadButtonClick = () => {
    const ciberseguridadSection = document.getElementById('ciberseguridad-section');
    ciberseguridadSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactoButtonClick = () => {
    const contactoSection = document.getElementById('contacto-section');
    contactoSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="video-container">
        <video autoPlay loop muted className="video-bg" playbackRate={2}>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="content">
            <h1>DIQUEJ</h1>
            <p>Bienvenido a DIQUEJ, aquí encontrarás todo lo relacionado con....</p>
            <p>El mundo de los Videojuegos, Tecnología, Ciberseguridad y mucho más.</p>
          </div>
        </div>
        <div className="button-row">
          <button className="nav-button" onClick={handleHomeButtonClick}>Inicio</button>
          <button className="nav-button" onClick={handleTiendaButtonClick}>Tienda</button>
          <button className="nav-button" onClick={handleTecnologiaButtonClick}>Tecnología</button>
          <button className="nav-button" onClick={handleCiberseguridadButtonClick}>Ciberseguridad</button>
          <button className="nav-button" onClick={handleContactoButtonClick}>Contacto</button>
        </div>
      </div>
      <div id="tienda-section">
        <Tienda />
      </div>
      <div id="tecnologia-section">
        <Tecnologia />
      </div>
      <div id="ciberseguridad-section">
        <Ciberseguridad />
      </div>
      <div id="contacto-section">
        <Contacto />
      </div>
    </div>
  );
}

export default App;
