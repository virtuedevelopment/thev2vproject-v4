"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
import Href from "../interactive/Href";
import configurations from "@/_data/config";
import MobileNav from "./MobileNav";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <Link className="logo" href={"/"}>
        {" "}
        THE <span>V2V</span> PROJECT.{" "}
      </Link>

      <div className={styles.menuOptions}>
        <div className={styles.menuRoutes}>
          {configurations.ROUTING.mainRoutes.map((route) => (
            <Link
              href={route.url}
              key={route.url}
              className={
                current === route.url ? styles.menuLinkCurrent : styles.menuLink
              }
            >
              {route.route}
            </Link>
          ))}
        </div>

        <Href
          icon={faPlusSquare}
          title={"join us"}
          url={"/community"}
          theme={"main"}
        />
      </div>

      <MobileNav />
    </nav>
  );
}
