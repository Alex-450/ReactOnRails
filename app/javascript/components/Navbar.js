import React from "react";
import styles from "./app.module.css";

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <a className={styles.navbar_link} href="/">
        Home
      </a>
      <a className={styles.navbar_link} href="/gallery">
        Gallery
      </a>
    </nav>
  </div>
);

export default Navbar;
