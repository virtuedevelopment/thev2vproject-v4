"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "V2V Jam Year 01",
    description:
      "The first annual V2V Jam took place on August 13th 2022 at the Rideau Sports Center. The event featured over 25 black-owned businesses and 10 basketball teams competing to win a $2000 prize. V2V JAM was our first success and we will continue to build the organization for bigger and better events.",
    image: "https://thev2vproject.netlify.app/Assets/media/v2vjam.JPG",
  },
  {
    title: "Project V Fashion Show",
    description:
      "Project V is a fashion show that featured youth-led black-owned clothing brands from Ottawa and surrounding areas. The event featured 10 artists from varying cultures to further showcase the diversity of art in the black community. Project V was a total success and bolstered an attendance of over 700 people. The business involved benefited a great deal from the added exposure and we hope to make it an annual event.",
    image: "https://thev2vproject.netlify.app/Assets/media/GE.jpg",
  },
  {
    title: "V2V Jam Year 02",
    description:
      "The second annual V2V Jam took place on August 19th 2023 at uOttawa University. The event featured over 40 black-owned businesses and 10 basketball teams competing to win a $3500 prize. This event is what started this organization and we wanted to make the second one special. The business vendor market was unlike anything ever put together in this city.",
    image: "https://thev2vproject.netlify.app/Assets/media/tobe.JPG",
  },
];

export default function Highlights() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 8000); // Changes the story every 8 seconds

    return () => clearInterval(intervalId); // Clears interval on component unmount
  }, []);

  const currentStory = events[currentStoryIndex];

  return (
    <>
      {currentStory && (
        <section className={styles.highlights}>
          <Image
            src={currentStory.image}
            width={2500}
            height={500}
            alt="image"
          />

          <div>
            <h2>{currentStory.title}</h2>
            <p>{currentStory.description}</p>
          </div>
        </section>
      )}
    </>
  );
}
