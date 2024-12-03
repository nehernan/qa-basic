//import { useState } from "react";
//import { Col, Container, Row, Form, Button, Pagination } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import styles from "./Layout.module.scss"
import { WhatTesting } from "../Content/components/WhatTesting/WhatTesting";


const Layout: React.FC = () => {
  
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
      <WhatTesting/>
    </div>
  );
};

export default Layout;