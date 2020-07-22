import React from "react";
import styles from "../components/css/app.module.css";

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <a className={styles.navbar_link} href="/">
        Home
      </a>
      <a className={styles.navbar_link} href="/gallery">
        Gallery
      </a>
      <a className={styles.navbar_link} href="/riders">
        Riders
      </a>
      <a className={styles.navbar_link} href="/locations">
        Locations
      </a>
      <a className={styles.navbar_link} href="/contest">
        Contest
      </a>
    </nav>
  </div>
);

export default Navbar;
