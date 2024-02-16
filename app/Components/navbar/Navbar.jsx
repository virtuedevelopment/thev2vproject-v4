"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import configurations from "@/_data/config";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <Link className="logo" href={"/"}>
        {" "}
        THE V2V PROJECT{" "}
      </Link>

      <ul>
        {configurations.ROUTING.mainRoutes.map((route) => (
          <li key={route.url}>
            <Link href={route.url} className={styles.menulink}>
              {route.route}
            </Link>
          </li>
        ))}
      </ul>

      <Link className="button-main nav-button" href={"/community"}>
        JOIN US
      </Link>
      
      <MobileNav/>

    </nav>
  );
}
