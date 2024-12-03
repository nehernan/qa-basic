import React, { useState } from "react";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";

export const TestingMaintenance: React.FC = () => {
  const tableData = [
    {
      title: 'M6. Pruebas de mantenimiento',
      link: 'https://www.youtube.com/watch?v=luBpKKAm4po&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=29',
      duration: '6:32 min'
    },
    {
      title: 'M6. Análisis de impacto y pruebas de regresión',
      link: 'https://www.youtube.com/watch?v=rOeKeBg7JRY&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=30',
      duration: '4:02 min'
    },
    {
      title: 'M6. Disparador de pruebas de mantenimiento',
      link: 'https://www.youtube.com/watch?v=u31QCjPes-s&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=31',
      duration: '7:26 min'
    },
    {
      title: 'Cierre del curso',
      link: 'https://www.youtube.com/watch?v=sQSbYK6BDPg&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=32',
      duration: '2:53 min'
    }
  ];

   const [videoUrl, setVideoUrl] = useState<string | null>(null);
   const [activeVideo, setActiveVideo] = useState<string | null>(null); // Video activo

   const handleClickVideo = (link: string) => {
     const videoId = link.split("v=")[1]?.split("&")[0];
     const embedUrl = `https://www.youtube.com/embed/${videoId}`;
     setVideoUrl(embedUrl);
     setActiveVideo(link); 
   };

   return (
    <>
      <AccordionContent
        title="06 Testing de mantenimiento"
        child={
          <div>
            {/* Verifica si hay una URL del video para mostrar el iframe */}
            {videoUrl && <VideoContainer src={videoUrl} />}
            {tableData.map((item, index) => (
              <TablesContent
                key={index}
                title={item.title}
                link={item.link}
                duration={item.duration}
                onClickVideo={handleClickVideo} // Pasamos la función al componente
                isActive={activeVideo === item.link} // Compara si el video es activo
              />
            ))}
          </div>
        }
      />
    </>
  );
};