import React from "react";
import styles from "./VideoContainer.module.scss";

interface VideoContainerProps {
    src: string;
  }

export const VideoContainer: React.FC<VideoContainerProps> = ({ src }) => {
  return (
    <div className={styles.videoContainer}>
        <iframe
            width="100%"
            height="800"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
  );
};
