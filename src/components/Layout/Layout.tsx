//import { useState } from "react";
//import { Col, Container, Row, Form, Button, Pagination } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import styles from "./Layout.module.scss"
import { WhatTesting } from "../Content/components/WhatTesting/WhatTesting";


const Layout: React.FC = () => {
  return (
    <div className={styles.containerLayout}>
      <WhatTesting/>
    </div>
  );
};

export default Layout;