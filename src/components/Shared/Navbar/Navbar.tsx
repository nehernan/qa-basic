import React from "react";
import styles from "./Navbar.module.scss"

interface NavbarCustomProps {
  title: string;
  routeLink?: string;
}

export const HeaderCustom: React.FC<NavbarCustomProps> = ({ title, routeLink }) => {
  return (
    <nav className={styles.Navbar}>
      <h2>{title}</h2>
      <p>{routeLink}</p>
    </nav>
  );
};