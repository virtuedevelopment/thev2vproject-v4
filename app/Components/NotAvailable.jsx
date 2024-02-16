import React from "react";
import Link from "next/link";

export default function NotAvailable() {
  return (
    <section className="not-available">
      <h1>COMMUNITY PAGE COMING SOON.</h1>
      <p>
        We&#39;re excited to bring a fresh update to our community page, introducing
        business profiles, details on events hosted by V2V and other
        organizations, along with exclusive discount codes and sales for various
        businesses. To keep up with these updates and more, follow us on our
        Instagram account{" "}
        <Link href={"/instagram.com/thev2vproject"}>@thev2vproject</Link>. Stay
        tuned and become an integral part of our growing community.{" "}
      </p>
    </section>
  );
}
