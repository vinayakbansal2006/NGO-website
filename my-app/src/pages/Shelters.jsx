import React, { useEffect, useState } from "react";
import ShelterCard from "../components/ShelterCard";
import { API_BASE_URL } from "../api/config";

const Shelters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBeds, setFilterBeds] = useState('all');

  const shelters = [
    {
      id: 1,
      name: "Mercury Shelter",
      location: "49 main market",
      capacity: 50,
      availableBeds: 12,
      contact: "+91 9876543201"
    },
    {
      id: 2,
      name: "Venus Shelter",
      location: "78 Park Road",
      capacity: 75,
      availableBeds: 8,
      contact: "+91 9345678902"
    },
    {
      id: 3,
      name: "Mars Shelter",
      location: "89 River Lane",
      capacity: 60,
      availableBeds: 15,
      contact: "+91 9345678903"
    },
    {
      id: 4,
      name: "Jupiter Shelter",
      location: "12 Lake View Road",
      capacity: 40,
      availableBeds: 5,
      contact: "+91 9345678904"
    },
    {
      id: 5,
      name: "Saturn Shelter",
      location: "Sector 21, Noida",
      capacity: 80,
      availableBeds: 20,
      contact: "+91 9345678905"
    },
    {
      id: 6,
      name: "Neptune Shelter",
      location: "MG Road, Noida",
      capacity: 55,
      availableBeds: 10,
      contact: "+91 7345678906"
    }
  ];

  // Filter shelters based on search and bed availability
  const filteredShelters = shelters.filter(shelter => {
    const matchesSearch = shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          shelter.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBeds = filterBeds === 'all' || 
                       (filterBeds === 'available' && shelter.availableBeds > 0) ||
                       (filterBeds === 'limited' && shelter.availableBeds > 0 && shelter.availableBeds <= 10);
    
    return matchesSearch && matchesBeds;
  });

  return (
    <div className="shelters-page">
      {/* Hero Header with Background */}
      <div className="page-header shelters-header">
        <div className="page-header-content">
          <h1>Find a Safe Place to Stay</h1>
          <p>Discover shelters near you providing safety, comfort, and support</p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container">
        <div className="shelters-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filterBeds === 'all' ? 'active' : ''}`}
              onClick={() => setFilterBeds('all')}
            >
              All Shelters
            </button>
            <button 
              className={`filter-btn ${filterBeds === 'available' ? 'active' : ''}`}
              onClick={() => setFilterBeds('available')}
            >
              Beds Available
            </button>
            <button 
              className={`filter-btn ${filterBeds === 'limited' ? 'active' : ''}`}
              onClick={() => setFilterBeds('limited')}
            >
              Limited Availability
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>Showing <strong>{filteredShelters.length}</strong> shelter{filteredShelters.length !== 1 ? 's' : ''}</p>
        </div>

        {/* Shelters Grid */}
        <div className="shelters-grid">
          {filteredShelters.length > 0 ? (
            filteredShelters.map(shelter => (
              <ShelterCard key={shelter.id} shelter={shelter} />
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">😔</span>
              <h3>No shelters found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shelters;