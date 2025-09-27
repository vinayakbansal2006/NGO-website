import React from "react";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>NGO Help – Feeding & Sheltering the Needy</h1>
        <p>
          We are dedicated to providing food, shelter, and essential services to
          those in need. Together, we can make a difference.
        </p>
        <div>
          <a href="/shelters" className="btn">Find Shelter</a>
          <a href="/contact" className="btn">Volunteer</a>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">What We Do</h2>
        <p>
          NGO Help is committed to improving lives of the underprivileged.
          <br />- Provide nutritious food to the hungry daily.
          <br />- Offer temporary and permanent shelters for the homeless.
          <br />- Support education and health initiatives for poor communities.
          <br />- Work with volunteers to organize community outreach programs.
        </p>
      </section>

      <section className="container">
        <h2 className="section-title">Our Mission</h2>
        <p>
          Our mission is to ensure that no one sleeps hungry or without a roof. We
          aim to empower the community, provide resources, and bring hope to
          everyone in need.
        </p>
      </section>
    </div>
  );
}
