import React from "react";
import styles from "./TablesContent.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface TableContentProps {
    title: string;
    link: string;
    duration: string;
    onClickVideo: (link: string) => void
    isActive: boolean; // Nueva propiedad para indicar si está activo
}

export const TablesContent: React.FC<TableContentProps> = ({title, link, duration, onClickVideo, isActive, }) => {
  return (
    <div className={`${styles.tabletContentContainer} ${
        isActive ? styles.videoOpen : ""
      }`}
    >
        <div>
            <h4>{title}</h4>
            <div className={styles.video_duration}>
                <p>Video:</p>
                <p>{duration}</p>
            </div>
        </div>
        <button onClick={() => onClickVideo(link)}>
            <FontAwesomeIcon icon={faPlay}  /> {/* size="2x" */}
        </button>
    </div>
  );
};
