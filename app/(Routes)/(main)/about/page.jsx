import React from "react";
import configurations from "@/_data/config";
import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    name: "Promote Youth-led Black-Owned Businesses, Artists and More",
    description:
      "Our organization promotes Youth-led Black-owned businesses by showcasing their product, and services to increase visibility and create opportunities for young entrepreneurs.",
    icon: faLongArrowRight,
  },
  {
    name: "Host Community Engagement Initiatives",
    description:
      "Our organization hosts community engagement initiatives to build a sense of community among Youth-led Black-owned businesses, fostering collaboration and mutual support.",
    icon: faLongArrowRight,
  },
  {
    name: "Promote Networking Events for Youth in Business",
    description:
      "Our organization hosts networking events to connect Youth-led Black-owned businesses with potential customers, investors, and partners.",
    icon: faLongArrowRight,
  },
  {
    name: "Research Grant Opportunities for Small Businesses",
    description:
      "Our organization researches grant opportunities for Youth-led Black-Owned and provides guidance to business owners throughout the application process.",
    icon: faLongArrowRight,
  },
];

export default function page() {
  return (
    <main>
      <section className={styles.statistics} >
            <div>
                <big>2372</big>
                <p>Individual Participants</p>
                <small>Over the course of 2 years we have impacted our community greatly</small>
            </div>

            <div>
                <big>122</big>
                <p>Businesses Impacted</p>
                <small>We have provided platforms for countless black youth led businesses in Ottawa ON</small>
            </div>
            
            <div>
                <big>37</big>
                <p>Partnerships and Sponsors</p>
                <small>We have partnered with other organizations and gained sponsors from notable companies</small>
            </div>
      </section>

      <section className={styles.organization}>
        <div>
          <h2>Who We Are</h2>
          <small>For the youth and by the youth.</small>
          <p>
            The V2V Project is a Black and youth-led not-for-profit
            organization. Our organization is dedicated to cultivating wealth in
            the black community by providing youth with valuable resources to
            aid in business development while also enhancing entrepreneurial,
            and communication skills overtime. Our objective is to provide a
            platform for Youth-led Black-owned businesses to elevate by
            collaborating with one another through various events, workshops and
            initiatives.
          </p>
        </div>

        <Image width={2500} height={500} alt="image" src={"https://thev2vproject.netlify.app/Assets/media/winners.jpeg"} />
      </section>

      <section className={styles.features}>
        {features.map((feat) => (
          <div key={feat.name}>
            <h3>{feat.name}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.organization}>
        <Image width={2500} height={500} alt="image" src={"https://thev2vproject.netlify.app/Assets/media/tayo.JPG"} />

        <div>
          <h2>But it is not enough</h2>
          <small>What you can do to help</small>
          <p>
            We are committed to creating opportunities for youth development in
            our communities. Small business opportunities and access to
            financial knowledge are uncommon and disproportionately out of reach
            for many BIPOC communities. Even while many youth-led, black-owned
            businesses have benefited from our work, more needs to be done to
            overcome the obstacles that hinder economic growth. Without
            sponsorship and cooperation from actors and/or organizations with
            similar goals, much cannot be accomplished.
          </p>
        </div>
      </section>
    </main>
  );
}
