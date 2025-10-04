import React, { useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  const features = [
    {
      icon: "🍽️",
      title: "Free Meals",
      description: "Nutritious meals provided daily to those in need. Hot breakfast, lunch, and dinner available."
    },
    {
      icon: "🏥",
      title: "Medical Care",
      description: "Free basic healthcare services and medical checkups for the homeless and poor."
    },
    {
      icon: "💼",
      title: "Job Training",
      description: "Skill development programs to help people find employment and rebuild their lives."
    },
    {
      icon: "🏠",
      title: "Temporary Housing",
      description: "Safe and clean shelter facilities for those without a place to stay."
    },
    {
      icon: "👕",
      title: "Clothing Distribution",
      description: "Free clothing and essentials distributed to people in need throughout the year."
    },
    {
      icon: "📚",
      title: "Education Programs",
      description: "Educational support and literacy programs for children and adults."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Together We Can Make a Difference</h1>
          <p className="hero-subtitle">
            Helping homeless and poor people find hope, shelter, and opportunities for a better tomorrow.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-btn primary">Get Involved</Link>
            <Link to="/shelters" className="hero-btn secondary">Find Shelters</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard number="10,000+" label="People Helped" icon="👥" />
            <StatCard number="50,000+" label="Meals Served" icon="🍽️" />
            <StatCard number="25+" label="Shelters Available" icon="🏠" />
            <StatCard number="$500K+" label="Donations Received" icon="💰" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Comprehensive support for those in need</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>Join us in our mission to help those in need</p>
          <Link to="/signup" className="cta-btn">Sign Up Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
