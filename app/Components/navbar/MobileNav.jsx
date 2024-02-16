"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import configurations from "@/_data/config";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <button className={styles.mobileNavButton} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

        <aside className={`${styles.asideMenu} ${isOpen ? (styles.isOpen):(styles.isClosed)}`}>

          <button className={styles.mobileNavButton} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faX} />
          </button>

          <div>
            {configurations.ROUTING.mainRoutes.map((route)=>(
                <Link onClick={toggleMenu} key={route.url} href={route.url}> {route.route} </Link>
            ))}
          </div>


        </aside>
    </>
  );
}
