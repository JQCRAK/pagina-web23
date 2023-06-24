import React from 'react';
import './Tecnologia.css';

const Tecnologia = () => {
  const informationData = [
    {
      title: "Windows permitirá escribir directamente en campos de texto si contamos con entrada táctil",
      description: "No es extraño encontrarnos con dispositivos que cuenten con una pantalla táctil hoy en día, ya sean tablets o equipos convertibles con pantalla táctil, y eso Microsoft lo sabe. Es por ello que en la Build 23481 de Windows 11 Insider, encontramos una nueva funcionalidad de uso que nos permitirá, con un lápiz de entrada táctil, escribir manualmente encima de un campo de texto.",
      link: "https://www.geeknetic.es/Noticia/28848/Windows-permitira-escribir-directamente-en-campos-de-texto-si-contamos-con-entrada-tactil.html"
    },
    {
      title: "iOS 17 elimina parámetros de tracking de los links a los que hacemos click",
      description: "Apple lanzó recientemente varios dispositivos y anunció nuevas versiones de sus sistemas operativos, entre las cuales se encuentra iOS 17. Esta nueva versión de su sistema operativo móvil llega con varias mejoras, pero una de las características de privacidad que se han añadido al sistema operativo de Apple es la eliminación de parámetros de tracking.",
      link: "https://www.geeknetic.es/Noticia/28798/iOS-17-elimina-parametros-de-tracking-de-los-links-a-los-que-hacemos-click.html"
    },
    {
      title: "Microsoft dirá adiós a Cortana a finales de año",
      description: "En plena efervescencia de los asistentes virtuales como Alexa de Amazon, Siri de Apple o Google Assistant, Microsoft apostó por Cortana. Lanzado inicialmente en Windos Phone y más tarde integrado en sus sistemas operativos Windows 10 de escritorio, Cortana permitía comunicarse por voz con el equipo y realizar tareas sincronizadas entre dispositivos.",
      link: "https://www.geeknetic.es/Noticia/28739/Microsoft-dira-adios-a-Cortana-a-finales-de-ano.html"
    }
  ];

  const curiosityData = [
    {
      title: "Conexión Sináptica Neuronal",
      description: "Neuralink, una empresa vinculada con Elon Musk, ya está probando la conexión sináptica neuronal y esto significa que podremos comernos una hamburguesa en el metaverso o sentir cualquier cosa: el viento; placer, olores. La tecnología ya está en fase experimental y las aplicaciones que puede tener será cuestión de ir pensándolas.",
      link: "https://www.iebschool.com/blog/29-tendencias-tecnologicas-que-cambiaran-nuestra-forma-de-vivir-en-2023-tecnologia/"
    },
    {
      title: "Clones o Gemelos Digitales",
      description: "Tener una réplica en el metaverso o digital para realizar todas las pruebas que quieras sin ningún riesgo ya existe, pero será 2023 el año en el que veremos el desarrollo de esta tecnología que ya se ha utilizado de forma intensiva en Fórmula 1.",
      link: "https://www.iebschool.com/blog/29-tendencias-tecnologicas-que-cambiaran-nuestra-forma-de-vivir-en-2023-tecnologia/"
    }
  ];

  const renderCards = (data, isCuriosity = false) => {
    return data.map((item, index) => (
      <div className={`card ${isCuriosity ? "curiosity-card" : "information-card"}`} key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">Leer más</a>
      </div>
    ));
  };

  return (
    <div className="tecnologia-container">
      <h2>Tecnología y Curiosidades</h2>

      <div className="information-container">
        <h3>Tecnologia</h3>
        <div className="cards-container">
          {renderCards(informationData)}
        </div>
      </div>

      <div className="curiosities-container">
        <h3>Curiosidades</h3>
        <div className="cards-container">
          {renderCards(curiosityData, true)}
        </div>
      </div>
    </div>
  );
};

export default Tecnologia;
