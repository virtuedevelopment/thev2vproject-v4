import React from "react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {

  return (
    <main>
      <section className={styles.contactSection}>
        <div className={styles.formBox} >
          <h1>Get in touch with us</h1>
          <p>We would like to know more about you and your business.</p>
          <ContactForm />
        </div>
        <Image src={'https://thev2vproject.netlify.app/Assets/media/host.jpg'} width={2000} height={600} alt="Image" />
      </section>
    </main>
  );
}
