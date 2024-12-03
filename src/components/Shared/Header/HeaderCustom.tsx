import React from "react";
import styles from "./HeaderCustom.module.scss"

interface HeaderCustomProps {
  title: string;
  description?: string;
}

export const HeaderCustom: React.FC<HeaderCustomProps> = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
};