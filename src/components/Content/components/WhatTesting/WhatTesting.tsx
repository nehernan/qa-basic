import React, { useState } from "react";
import { HeaderCustom } from "../../../Shared/Header/HeaderCustom";
import { TablesContent } from "../../../Shared/TablesContent/TablesContent";
import { VideoContainer } from "../../../Shared/VideoContainer/VideoContainer";

export const WhatTesting: React.FC = () => {
  const tableData = [
    /*  {
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
     }, */
     {
       title: 'Introducción',
       link: 'https://www.youtube.com/watch?v=rBdk2yhse48&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi',
       duration: '2:44 min',
     },
     {
       title: 'M1. Sistemas de software',
       link: 'https://www.youtube.com/watch?v=sgU7OnMQsjA&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=2',
       duration: '13:43 min',
     },
     {
       title: 'M1. Causas de defectos',
       link: 'https://www.youtube.com/watch/v=LUEDggRGFbI&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=3',
       duration: '6:54 min',
     },
     {
       title: 'M1. Función de las pruebas',
       link: 'https://www.youtube.com/watch/v=QzZdmYywzd8&list=PLfWSKMW94oTaqcB4oTaqcB7Rfs4Z4m8gp_dmIHEi&index=4',
       duration: '9:54 min',
     },
     {
       title: 'M1. ¿Cuánto testing es necesario?',
       link: 'https://www.youtube.com/watch/v=L6RyzYjX59Y&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=5',
       duration: '3:03 min',
     },
     {
       title: 'M1. Analogía de las Pruebas de manejo',
       link: 'https://www.youtube.com/watch/v=oC9xLQtiZus&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=6',
       duration: '6:43 min',
     },
   ];

   const [videoUrl, setVideoUrl] = useState<string | null>(null);

   const handleClickVideo = (link: string) => {
     const videoId = link.split("v=")[1]?.split("&")[0];
     const embedUrl = `https://www.youtube.com/embed/${videoId}`;
     setVideoUrl(embedUrl);
   };

  return (
    <>
     <HeaderCustom title='¿Qué es el testing y por qué es necesario?'/>
     <div>
       {/* Verifica si hay una URL del video para mostrar el iframe */}
       {videoUrl && (
          <VideoContainer src={videoUrl}/>
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
    </>
  );
};
