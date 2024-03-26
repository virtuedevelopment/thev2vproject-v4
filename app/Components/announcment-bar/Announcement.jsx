import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Announcement() {
  return (
    <section className="announcement-bar">
      <FontAwesomeIcon icon={faBell} />
      <p>COMMUNITY PAGE COMING SOON</p>
    </section>
  );
}
