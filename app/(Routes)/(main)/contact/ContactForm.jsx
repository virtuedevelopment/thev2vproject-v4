"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    organization: "",
    message: "",
  });

  const sendMessage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(contact);
    setSuccess("Message sent successfully we will be in touch soon");
    setIsLoading(false);
  };
  const setContactDetails = (e) => {
    setSuccess("");
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form className={styles.contactform}>
      <div className="inputbox">
        <small>Full Name *</small>
        <input
          type="text"
          name="fullname"
          value={contact.fullname}
          onChange={setContactDetails}
          onBlur={setContactDetails}
          required
          placeholder="Full Name"
        />
      </div>

      <div className="inputbox">
        <small>Email *</small>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={setContactDetails}
          onBlur={setContactDetails}
          required
          placeholder="Email Address"
        />
      </div>

      <div className="inputbox">
        <small>Organization</small>
        <input
          type="text"
          name="organization"
          value={contact.organization}
          onChange={setContactDetails}
          onBlur={setContactDetails}
          placeholder="Organization or Business name"
        />
      </div>

      <div className="inputbox">
        <small>Message</small>
        <textarea
          name="message"
          value={contact.message}
          onChange={setContactDetails}
          onBlur={setContactDetails}
          required
          placeholder="Message here"
        ></textarea>
      </div>

      <small className="success" >{success}</small>

      <button onClick={sendMessage} className="button-main">
        {isLoading ? "Sending..." : "Submit Message"}
      </button>
    </form>
  );
}
