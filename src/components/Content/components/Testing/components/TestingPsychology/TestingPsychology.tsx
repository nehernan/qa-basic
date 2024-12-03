import React, { useState } from "react";
import { AccordionContent } from "../../../../../Shared/Accordion/AccordionContent";
import { VideoContainer } from "../../../../../Shared/VideoContainer/VideoContainer";
import { TablesContent } from "../../../../../Shared/TablesContent/TablesContent";

export const TestingPsychology: React.FC = () => {
  const tableData = [
    {
      title: 'M3. ¿Quién es un tester?',
      link: 'https://www.youtube.com/watch?v=BnZjVQHQ4Ac&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=14',
      duration: '11:31 min'
    },
    {
      title: 'M3. Tester VS World',
      link: 'https://www.youtube.com/watch?v=6M-lQ4Oh07c&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=15',
      duration: '11:14 min'
    },
    {
      title: 'M3. Todo puede ser mejor.',
      link: 'https://www.youtube.com/watch?v=Dmc7Y22RIuo&list=PLfWSKMW94oTaqcB7Rfs4Z4m8gp_dmIHEi&index=16',
      duration: '9:34 min'
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
