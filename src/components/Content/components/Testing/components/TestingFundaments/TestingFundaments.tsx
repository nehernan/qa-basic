import React, { useState } from "react";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";

export const TestingFundaments: React.FC = () => {
    const tableData = [
        {
            title: 'M2. Siete principios del testing',
            link: 'https://www.youtube.com/watch?v=sqykQe77M7Q&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=7',
            duration: '7:08 min'
        },
        {
            title: 'M2. Proceso fundamental',
            link: 'https://www.youtube.com/watch/v=DZuuM1F2s8E&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=8',
            duration: '2:51 min'
        },
        {
            title: 'M2. Planeación y control',
            link: 'https://www.youtube.com/watch/v=2xKLkGBTpyo&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=9',
            duration: '6:21 min'
        },
        {
            title: 'M2. Análisis y diseño de la implementación',
            link: 'https://www.youtube.com/watch/v=HV5dJ2l5XYk&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=10',
            duration: '4:51 min'
        },
        {
            title: 'M2. Implementación y ejecución',
            link: 'https://www.youtube.com/watch/v=5ul9hay4NfY&list=PLfWSKMW94oTaqcB7Rfs4m8gp_dmIHEi&index=11',
            duration: '3:55 min'
        },
        {
            title: 'M2. Evaluar criterios de entrada y salida',
            link: 'https://www.youtube.com/watch/v=nCuEtM9c86Y&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=12',
            duration: '2:37 min'
        },
        {
            title: 'M2. Actividades de cierre',
            link: 'https://www.youtube.com/watch/v=uBKOpbMCQjA&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=13',
            duration: '2:48 min'
        }
    ];
    
        const [videoUrl, setVideoUrl] = useState<string | null>(null);
        const [activeVideo, setActiveVideo] = useState<string | null>(null); // Video activo


        const handleClickVideo = (link: string,) => {
            const videoId = link.split("v=")[1]?.split("&")[0];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            setVideoUrl(embedUrl);
            setActiveVideo(link); 
        };
       
  return (
    <>
    <AccordionContent
      title="02 Fundamentos del testing"
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
