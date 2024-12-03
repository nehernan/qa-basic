import React, { useState } from "react";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";

export const TestingPsychology: React.FC = () => {
  const tableData = [
    { title: 'Introducción', link: 'https://www.youtube.com/watch?v=rBdk2yhse48&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi', duration: '2:44 min' },
    { title: 'M1. Sistemas de software', link: 'https://www.youtube.com/watch?v=sgU7OnMQsjA&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=2', duration: '13:43 min' },
    { title: 'M1. Causas de defectos', link: 'https://www.youtube.com/watch/v=LUEDggRGFbI&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=3', duration: '6:54 min' },
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
        title="03 Psicología del testing"
        child={
          <div>
            {videoUrl && <VideoContainer src={videoUrl} />}
            {tableData.map((item, index) => (
              <TablesContent
                key={index}
                title={item.title}
                link={item.link}
                duration={item.duration}
                onClickVideo={handleClickVideo} // Pasamos la función al componente
                isActive={activeVideo === item.link} // Video activo
              />
            ))}
          </div>
        }
      />
    </>
  );
};
