import React from "react";
import styles from "../components/css/app.module.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
  <div className={styles.navbar}>
    <Navbar expand="lg" id={styles.justify_content_center}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" id={styles.justify_content_center}>
        <Nav className="justify-content-center">
          <Nav.Link className={styles.navbar_link} href="/">
            Home
          </Nav.Link>
          <Nav.Link className={styles.navbar_link} href="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link className={styles.navbar_link} href="/riders">
            Riders
          </Nav.Link>
          <Nav.Link className={styles.navbar_link} href="/locations">
            Locations
          </Nav.Link>
          <Nav.Link className={styles.navbar_link} href="/contest">
            Contest
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavBar;
