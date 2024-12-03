import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import styles from "./AccordionContent.module.scss";

interface AccordionContentProps {
  title: string;
  child: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ title, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div
        className= {`${styles.accordion_header} ${
          isOpen ? styles.open : ""
        }`}
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
        aria-controls="accordion-body"
      >
        <h4  className={styles.accordion_title}>{title}</h4>
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className={`${styles.icon} ${isOpen ? styles.rotated : ''}`}
        />
      </div>
      <div id="accordion-body" className={`${styles.accordion_body} ${isOpen ? 'open' : ''}`}>
        {isOpen && child}
      </div>
    </div>
  );
};
