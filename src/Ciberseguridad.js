import React from 'react';
import './Ciberseguridad.css';
import icon1 from './imagenes/orca.png';
import icon2 from './imagenes/Netwrix.jpg';

const Ciberseguridad = () => {
  return (
    <div id="ciberseguridad-section" className="ciberseguridad-container">
      <div className="ciberseguridad-content">
        <h2 className="ciberseguridad-title">Ciberseguridad</h2>
        <p className="ciberseguridad-description">Asegura tus aplicaciones con nuestras soluciones avanzadas de ciberseguridad.</p>

        <div className="ciberseguridad-card">
          <img src={icon1} alt="Icono 1" className="ciberseguridad-icon" />
          <h3 className="ciberseguridad-card-title">Orca Security</h3>
          <p className="ciberseguridad-card-description">Protege tu aplicación contra amenazas cibernéticas y ataques maliciosos.
          Orca Security se enfoca en brindar seguridad cibernética en la nube a través de un enfoque de identificación lateral, proporcionando 
          visibilidad integral, detección precisa y priorización eficiente de riesgos. Esto ayuda a las organizaciones a proteger sus datos y 
          activos en la nube, mitigando las amenazas y manteniendo un entorno seguro.</p>
        </div>

        <div className="ciberseguridad-card">
          <img src={icon2} alt="Icono 2" className="ciberseguridad-icon" />
          <h3 className="ciberseguridad-card-title">Netwrix Auditor</h3>
          <p className="ciberseguridad-card-description">Netwrix Auditor es una solución de gestión de seguridad y cumplimiento que brinda visibilidad, 
          supervisión y generación de informes detallados sobre cambios, configuraciones y actividades en entornos de TI. Ayuda a las organizaciones 
          a mantener la seguridad de sus datos, detectar incidentes de seguridad y cumplir con las regulaciones aplicables.
</p>
        </div>
      </div>
    </div>
  );
};

export default Ciberseguridad;
