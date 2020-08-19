import React from "react";
import styles from "../components/css/app.module.css";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
  <div className={styles.footer}>
    <Navbar className="justify-content-center">
      <Nav className="flex-column text-center">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/riders">Riders</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/contest">Contest</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </div>
);

export default Footer;
