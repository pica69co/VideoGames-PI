import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../NavBar/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoNavLink}>
          <h3 className={styles.blinking}> VideoGames </h3>
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>
            <NavLink
              className={`${styles.navLink} ${styles.navMenuLink} ${styles.navMenuLinkActive}`}
              to={"/videogames"}
            >
              VideoGames
            </NavLink>
          </li>
          <li className={styles.navMenuItem}>
            <NavLink
              className={`${styles.navLink} ${styles.navMenuLink}`}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className={styles.navMenuItem}>
            <NavLink
              className={`${styles.navLink} ${styles.navMenuLink}`}
              to={"/"}
            >
              exit
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
