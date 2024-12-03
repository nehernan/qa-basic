//import { useState } from "react";
//import { Col, Container, Row, Form, Button, Pagination } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import styles from "./Layout.module.scss"
import { HeaderCustom } from "../Shared/Header/HeaderCustom";
import { TablesContent } from "../Shared/TablesContent/TablesContent";

const Layout: React.FC = () => {
  const tableData = [
    {
      title: '¿Qué hace un QA?',
      link: 'https://www.youtube.com/watch?v=lgH-EgNy2B8',
      duration: '1:11 min',
    },
    {
      title: 'Diferencia entre QA Y QC | ¿Qué significan?',
      link: 'https://www.youtube.com/watch?v=4fje3Molwls',
      duration: '1:12 min',
    },
    {
      title: 'Diferencia entre Error , Defecto y Falla en Testing QA',
      link: 'https://www.youtube.com/watch?v=QEJ9VJ7aFi0',
      duration: '1:03 min',
    },
    // Agrega más objetos según sea necesario
  ];

  const [videoUrl, setVideoUrl] = useState<string | null>(null); // Acepta tanto string como null

  // Este es el método que se invoca cuando se hace clic en un link para mostrar el video
  const handleClickVideo = (link: string) => {
    // Convertimos la URL al formato embed
    const videoId = link.split("v=")[1]?.split("&")[0]; // Extrae el ID del video
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setVideoUrl(embedUrl); // Asigna la URL embebida al estado
  };

  return (
    <div className={styles.containerLayout}>
     <HeaderCustom title='Esto es un header reutilizable'/>
     <div>
       {/* Verifica si hay una URL del video para mostrar el iframe */}
       {videoUrl && (
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
     </div>
     {tableData.map((item, index) => (
        <TablesContent
          key={index}
          title={item.title}
          link={item.link}
          duration={item.duration}
          onClickVideo={handleClickVideo} // Pasamos la función al componente
        />
      ))}
    </div>
  );
};

export default Layout;