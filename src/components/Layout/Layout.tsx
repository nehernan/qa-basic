//import { useState } from "react";
//import { Col, Container, Row, Form, Button, Pagination } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styles from "./Layout.module.scss"
import Testing from "../Content/components/Testing/Testing";

const Layout: React.FC = () => {
  return (
    <div className={styles.containerLayout}>
      <Testing/>
    </div>
  );
};

export default Layout;