import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./landing.module.css";
import configurations from "@/_data/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
  return (
    <main>
      <section className={styles.main}>

        <small>Our website is currently under maintanance. We will be back soon.</small>
        <Image
          src={"/landing_graphic.svg"}
          width={500}
          height={500}
          alt="Landing Graphic"
        />
        <h1>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0s' }}>T</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.1s' }}>H</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.2s' }}>E</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.3s' }}>&nbsp;</span>{/* Space */}
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.4s' }}>V</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.5s' }}>2</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.6s' }}>V</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.7s' }}>&nbsp;</span>{/* Space */}
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.8s' }}>P</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '0.9s' }}>R</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1s' }}>O</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1.1s' }}>J</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1.2s' }}>E</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1.3s' }}>C</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1.4s' }}>T</span>
          <span className={styles.fadeInUpSpan} style={{ animationDelay: '1.6s' }}>.</span>
        </h1>
        
        <h2>Providing <span>leadership</span> and <span>guidance</span> within our community.</h2>

        <div className={styles.socialLinks}>
            {configurations.INFORMATION.social_links.map((link)=>(
              <Link key={link.social} href={link.url}> <FontAwesomeIcon icon={link.icon} /> </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
