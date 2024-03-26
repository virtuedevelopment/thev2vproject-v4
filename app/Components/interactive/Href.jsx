import React from "react";
import Link from "next/link";
import styles from "./interactive.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Href({ title, icon, url, theme }) {
  return (
    <Link className={styles[theme]} href={url}>
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </Link>
  );
}
