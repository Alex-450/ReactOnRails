import React from "react";
import styles from "../components/css/app.module.css";
import { Navbar, Container, Row, Nav } from "react-bootstrap";

const TitleNav = () => (
  <Navbar className={styles.navbar} id={styles.justify_content_center}>
    <Nav.Link className={styles.title_nav_link} href="/">
      Boulder Bike Tour
    </Nav.Link>
    {/* <h3 href="/">Boulder Bike Tour 2020</h3> */}
  </Navbar>
);
export default TitleNav;
