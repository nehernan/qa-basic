import React, { useState } from "react";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";

export const TestingSoftwareModel: React.FC = () => {
  const tableData = [
        {
            title: 'M4. Software Development Life Cycle',
            link: 'https://www.youtube.com/watch?v=GbG0zwSZVq4&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=17',
            duration: '4:41 min'
        },
        {
            title: 'M4. Modelo V',
            link: 'https://www.youtube.com/watch?v=_XhNaHqOs3w&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=18',
            duration: '5:03 min'
        },
        {
            title: 'M4. Ciclos de vida iterativos',
            link: 'https://www.youtube.com/watch?v=LYfDdFuh62s&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=19',
            duration: '8:48 min'
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
        title="04 Modelos de desarrollo de software"
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