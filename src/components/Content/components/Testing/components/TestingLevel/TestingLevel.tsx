import React, { useState } from "react";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";

export const TestingLevel: React.FC = () => {
    const tableData = [
        {
          title: 'M5. Pruebas de componentes unitarias',
          link: 'https://www.youtube.com/watch?v=JZloXsHcplU&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=20',
          duration: '6:20 min'
        },
        {
          title: 'M5. Pruebas de integración',
          link: 'https://www.youtube.com/watch?v=kZuIJBj5k7M&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=21',
          duration: '8:15 min'
        },
        {
          title: 'M5. Pruebas de sistema',
          link: 'https://www.youtube.com/watch?v=BvmzvAsraII&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=22',
          duration: '5:11 min'
        },
        {
          title: 'M5. Pruebas de aceptación',
          link: 'https://www.youtube.com/watch?v=37YcKKj-XpM&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=23',
          duration: '6:50 min'
        },
        {
          title: 'M5. Tipos de pruebas',
          link: 'https://www.youtube.com/watch?v=3N5vbPymytk&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=24',
          duration: '2:27 min'
        },
        {
          title: 'M5. Prueba Funcional',
          link: 'https://www.youtube.com/watch?v=l3eFYOE6CUw&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=25',
          duration: '4:49 min'
        },
        {
          title: 'M5. Prueba no Funcional',
          link: 'https://www.youtube.com/watch?v=RwfnKbXNbG4&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=26',
          duration: '3:26 min'
        },
        {
          title: 'M5. Prueba estructural',
          link: 'https://www.youtube.com/watch?v=27i_M1m-S08&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=27',
          duration: '2:35 min'
        },
        {
          title: 'M5. Pruebas asociadas con cambios',
          link: 'https://www.youtube.com/watch?v=aTUFa9mmA4w&list=PLfWSKMW94oTaqcB7rs4Z4m8gp_dmIHEi&index=28',
          duration: '6:20 min'
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
        title="05 Niveles y tipos de testing"
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