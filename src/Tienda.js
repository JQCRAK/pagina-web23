import React from 'react';
import './Tienda.css';
import juego1 from './imagenes/juego1.jpg';
import juego2 from './imagenes/juego2.jpg';
import juego3 from './imagenes/juego3.jpg';

const Tienda = () => {
  return (
    <div id="tienda-section" className="tienda-container">
      <h2 className="tienda-title">Tienda de Juegos</h2>
      <div className="juegos-container">
        <div className="juego-card">
          <div className="juego-img">
            <img src={juego1} alt="Juego 1" />
          </div>
          <div className="juego-info">
            <h3 className="juego-title">Street Fighter 6</h3>
            <p className="juego-description">Este es un juego de lucha en el que los jugadores controlan a diferentes luchadores, 
            cada uno con su propio estilo de lucha y habilidades especiales. Los jugadores compiten en torneos de lucha en todo el 
            mundo para convertirse en el campeón supremo.</p>
            <a href="https://www.streetfighter.com/6/es-es" className="juego-link">Comprar</a>
          </div>
        </div>
        <div className="juego-card">
          <div className="juego-img">
            <img src={juego2} alt="Juego 2" />
          </div>
          <div className="juego-info">
            <h3 className="juego-title">Diablo III</h3>
            <p className="juego-description">Es un juego de rol de acción en el que los jugadores luchan contra hordas de enemigos y 
            monstruos para alcanzar objetivos y misiones. Los jugadores pueden elegir el personaje que deseen, cada uno con habilidades 
            y armamento únicos.</p>
            <a href="https://us.diablo3.blizzard.com/es-mx/" className="juego-link">Comprar</a>
          </div>
        </div>
        <div className="juego-card">
          <div className="juego-img">
            <img src={juego3} alt="Juego 3" />
          </div>
          <div className="juego-info">
            <h3 className="juego-title">Baldur's Gate 3</h3>
            <p className="juego-description">Este es un juego de rol de aventuras en el que los jugadores pueden personalizar su personaje 
            y vivir una experiencia épica en un mundo de fantasía. Los jugadores pueden explorar diferentes áreas, hablar con personajes no 
            jugables y luchar contra enemigos mientras avanzan en la trama del juego.</p>
            <a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/" className="juego-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
