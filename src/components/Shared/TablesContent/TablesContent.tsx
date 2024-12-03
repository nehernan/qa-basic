import React from "react";
import styles from "./TablesContent.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface TableContentProps {
    title: string;
    link: string;
    duration: string;
    onClickVideo: (link: string) => void
}

export const TablesContent: React.FC<TableContentProps> = ({title, link, duration, onClickVideo  }) => {
  return (
    <div className={styles.tabletContentContainer}>
        <div>
            <h3>{title}</h3>
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
