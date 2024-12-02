import Link from "next/link";
import React from "react";

import classes from "./header.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Background from "./Background";
import NavLink from "./NavLink";

const RootHeader = () => {
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
              <NavLink href="/meals">Latest Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default RootHeader;
