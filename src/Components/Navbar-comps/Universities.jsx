import React, { useState } from "react";
import { Link } from "react-router-dom";
import universitiesData from "../../data/universitiesData"; // Import the university data
import "./Universities.css";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input

  // Filter universities based on the search term
  const filteredUniversities = universitiesData.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="unique-universities-page">
      <div className="container">
        <h1 className="text-center my-4">Universities</h1>
        <p className="text-center mb-4">Explore top universities around the world.</p>

        {/* Search Bar */}
        <div className="search-bar-container text-center mb-4">
          <input
            type="text"
            className="search-bar"
            placeholder="Search universities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Universities List */}
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <div key={university.id} className="unique-university-card mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="img-fluid unique-university-image"
                  />
                </div>

                <div className="col-md-8">
                  <div className="unique-card-body">
                    <h5 className="unique-card-title">{university.name}</h5>
                    <p className="unique-card-text">{university.info}</p>
                    <Link
                      to={`/universities/${university.id}`}
                      className="unique-btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No universities found.</p>
        )}
      </div>
    </div>
  );
};

export default Universities;