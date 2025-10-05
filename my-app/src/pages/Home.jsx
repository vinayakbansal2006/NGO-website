

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Free Meals",
      description: "Providing nutritious meals daily to those in need. We serve hot breakfast, lunch, and dinner with dignity and care.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
    },
    {
      title: "Medical Care",
      description: "Access to free basic healthcare services, medical checkups, and emergency care for the homeless and poor.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      title: "Job Training",
      description: "Professional skill development programs designed to help people find meaningful employment and rebuild their lives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Temporary Housing",
      description: "Safe, clean shelter facilities providing immediate refuge and a pathway to permanent housing solutions.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
    },
    {
      title: "Clothing Distribution",
      description: "Free clothing, shoes, and essential items distributed year-round to people experiencing hardship.",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80"
    },
    {
      title: "Education Programs",
      description: "Comprehensive educational support and literacy programs for children and adults seeking to improve their futures.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Together We Can End Poverty</h1>
          <p className="hero-subtitle">
            Every person deserves dignity, opportunity, and hope. Join us in providing direct support to homeless and poor individuals through shelter, food, healthcare, and job training.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-btn primary">Start Helping Today</Link>
            <Link to="/shelters" className="hero-btn secondary">Find Shelters</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard number="10,000+" label="Lives Changed" icon="👥" />
            <StatCard number="50,000+" label="Meals Served" icon="🍽️" />
            <StatCard number="25+" label="Active Shelters" icon="🏠" />
            <StatCard number="$500K+" label="Direct Aid Given" icon="💰" />
          </div>
        </div>
      </section>

      {/* Features Section - SWIPEABLE CAROUSEL */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How We Help</h2>
          <p className="section-subtitle">Comprehensive support services designed to break the cycle of poverty</p>
          
          {/* Carousel Container */}
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevSlide}>
              ‹
            </button>

            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="feature-card-swipe">
                      <div 
                        className="feature-image"
                        style={{
                          backgroundImage: `url(${feature.image})`
                        }}
                      >
                        <div className="feature-overlay"></div>
                        <div className="feature-icon-large">{feature.icon}</div>
                      </div>
                      <div className="feature-content">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextSlide}>
              ›
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {features.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Real stories, real change</p>
          
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}>
              "This organization gave me more than just a place to sleep. They gave me hope, training, and the tools to rebuild my life. Today, I have a job and my own apartment."
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              fontWeight: '600'
            }}>
              — Michael, Former Shelter Resident
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Support Changes Lives</h2>
          <p>
            Join thousands of compassionate people making a real difference. 
            Every contribution helps provide shelter, food, and hope to those who need it most.
          </p>
          <Link to="/signup" className="cta-btn">Get Involved Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;