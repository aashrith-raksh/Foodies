import Link from "next/link";
import React from "react";

import styles from "./header.module.css"
import logo from "@/assets/logo.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <img src={logo.src} alt="Logo" />
        Foodies
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Latest Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
