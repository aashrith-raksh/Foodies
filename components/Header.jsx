import Link from "next/link";
import React from "react";

import classes from "./header.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Background from "./Background";

const Header = () => {
  return (
    <>
      <Background />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logo} alt="Logo" priority />
          Foodies
        </Link>
        <nav className={classes.nav}>
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
    </>
  );
};

export default Header;
