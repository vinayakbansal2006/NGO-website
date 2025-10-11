// FILE: src/pages/About.jsx
import React, { useEffect, useState } from "react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Vinayak Bansal",
      role: "Founder & CEO",
      quote: "Every person deserves dignity and a chance to rebuild their life. Together, we can end homelessness.",
      image: "/team/vinayak.jpg"
    },
    {
      id: 2,
      name: "Utkarsh Singh",
      role: "Director of Operations",
      quote: "Small acts of kindness create ripples of hope. Our mission is to turn those ripples into waves of change.",
      image: "/team/utkarsh.jpg"
    },
    {
      id: 3,
      name: "Vedant Sharma",
      role: "Community Outreach Manager",
      quote: "Connection and compassion are the bridges that help people move from crisis to stability.",
      image: "/team/vedant.png"
    },
    {
      id: 4,
      name: "Khush Patel",
      role: "Volunteer Coordinator",
      quote: "Volunteers are the heart of our organization. Their dedication transforms lives every single day.",
      image: "/team/khush.jpg"
    },
    {
      id: 4,
      name: "Sanjiti Gill",
      role: "Female Coordinator",
      quote: "Behind every smooth arc of progress is a mind attuned to detail and rhythm.",
      image: "/team/sanjiti.jpg"
    },
    {
      id: 4,
      name: "Parth Giri",
      role: "Web Developer/IT Officer",
      quote: "Bridging hearts and systems using technology to make compassion more efficient.",
      image: "/team/parth.jpg"
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Helping Hands</h1>
          <p className="about-hero-subtitle">
            Committed to ending homelessness and poverty through compassion, action, and community support
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide immediate relief and long-term solutions for homeless and impoverished individuals through shelter, food, healthcare, and job training programs.</p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>A world where every person has access to safe housing, nutritious food, quality healthcare, and opportunities to thrive and contribute to society.</p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>Compassion, dignity, integrity, and empowerment guide everything we do. We believe in treating every person with respect and providing pathways to independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                Helping Hands was founded in 2024 with a simple yet powerful belief: everyone deserves a helping hand during difficult times. What started as a small community initiative has grown into a comprehensive support system serving thousands of people each year.
              </p>
              <p>
                Our journey began when our founder, Vinayak Bansal, witnessed the growing homelessness crisis in our community. Rather than looking away, she decided to take action. With the help of dedicated volunteers and generous donors, we opened our first shelter with just 10 beds.
              </p>
              <p>
                Today, we operate 25+ shelters, serve over 50,000 meals annually, provide job training to hundreds, and have helped more than 10,000 individuals transition from homelessness to stable housing. But our work is far from over.
              </p>
              <p>
                Every day, we work tirelessly to provide not just temporary relief, but sustainable solutions that break the cycle of poverty. Through partnerships with local businesses, government agencies, and community organizations, we're creating a comprehensive support network that addresses the root causes of homelessness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate leaders dedicated to making a difference
          </p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card" data-aos-delay={index * 100}>
                <div className="team-image-wrapper">
                  <div 
                    className="team-image"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="team-overlay">
                    <div className="quote-icon">"</div>
                  </div>
                </div>

                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  
                  <div className="team-quote">
                    <div className="quote-mark">"</div>
                    <p>{member.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-stat">
              <div className="impact-number">2024</div>
              <div className="impact-label">Founded</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">10K+</div>
              <div className="impact-label">Lives Changed</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">25+</div>
              <div className="impact-label">Shelter Locations</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">500+</div>
              <div className="impact-label">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>Whether through volunteering, donating, or spreading awareness, you can make a difference today.</p>
          <div className="cta-buttons">
            <a href="/signup" className="cta-btn primary">Become a Volunteer</a>
            <a href="/contact" className="cta-btn secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;