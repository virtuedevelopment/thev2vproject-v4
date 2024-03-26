import React from "react";
import Landing from "../(landing)/Landing";
import Image from "next/image";
import Link from "next/link";
import Href from "@/app/Components/interactive/Href";
import styles from "./home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faPeopleRoof,
  faBookOpenReader,
  faBook,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Highlights from "./Highlights";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          className={styles.backgroundGraphic}
          src={"/landing_graphic.svg"}
          width={500}
          height={500}
          alt="Landing Graphic"
        />

        <div className={styles.heroInformation}>
          <h1>
            Providing <span>leadership</span> and <span>guidance</span> in our
            community.
          </h1>
          <span>
            <Href
              title={"About Us"}
              icon={faBook}
              url={"/about"}
              theme={"main"}
            />
            <Href
              title={"Community"}
              icon={faPlusSquare}
              url={"/community"}
              theme={"secondary"}
            />
          </span>
        </div>

        <img src={'/phone.svg'} alt="phone photo" className={styles.heroImg}/>
      </section>

      <section style={{ marginBlock: "2.5rem" }} className={styles.features}>
        <Image
          className={styles.backgroundGraphic}
          src={"/citybackground.svg"}
          width={1440}
          height={460}
          alt="city background"
        />

        <span className="title-card">
          <h2>WHAT WE DO</h2>
          <p>
            Our mission is dedicated to empowering Youth-led, black-owned
            businesses by providing comprehensive access to a wide array of
            resources, fostering opportunities for substantial business
            development, and facilitating growth through innovative strategies.
          </p>
        </span>

        <div className={styles.featureList}>
          <div className="card">
            <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
            <h3>Networking Opportunities</h3>
            <p>
              Our organization hosts networking events to connect Youth-led
              Black-owned businesses with potential customers, investors, and
              partners.
            </p>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faPeopleRoof} className="icon" />
            <h3>Community Engagement</h3>
            <p>
              Our organization hosts community engagement initiatives to build a
              sense of community among Youth-led Black-owned businesses,
              fostering collaboration and mutual support.
            </p>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faBookOpenReader} className="icon" />
            <h3>Grant Opportunities</h3>
            <p>
              Our organization researches grant opportunities for Youth-led
              Black-Owned and provides guidance to business owners throughout
              the application process.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS COMPONENT */}
      <Highlights />
    </main>
  );
}
