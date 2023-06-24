import React from 'react';
import './Contacto.css';
import background from './imagenes/Logo1.png';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="contacto-content">
        <h2>Contacto</h2>
        <div className="contacto-info">
          <p><strong>Teléfono:</strong> 0982896614</p>
          <p><strong>Email:</strong> diquej2023@gmail.com</p>
          <p><strong>Dirección:</strong> Calle Principal #123</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
