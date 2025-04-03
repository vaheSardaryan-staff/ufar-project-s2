import React, { useState } from "react";
import resourcesData from "../../data/resourcesData"; // Import the resources data
import "./Resources.css";

const Resources = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Extract unique subjects from resourcesData
  const subjects = ["All", ...new Set(resourcesData.map((resource) => resource.subject))];

  // Filter resources based on the selected subject
  const filteredResources =
    selectedSubject === "All"
      ? resourcesData
      : resourcesData.filter((book) => book.subject === selectedSubject);

  return (
    <div className="unique-resources-page">
      <div className="unique-resources-container">
        <h1 className="text-center unique-resources-title">Resources</h1>
        <p className="text-center unique-resources-description">
          Access helpful resources and guides for university applications.
        </p>

        {/* Filter Dropdown */}
        <div className="filter-container text-center mb-4">
          <label htmlFor="subject-filter" className="filter-label">
            Filter by Subject:
          </label>
          <select
            id="subject-filter"
            className="filter-dropdown"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          {filteredResources.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="unique-resources-card">
                <img
                  src={book.image}
                  alt={book.name}
                  className="unique-resources-card-image"
                />
                <div className="unique-resources-card-body">
                  <h5 className="unique-resources-card-title">{book.name}</h5>
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="unique-resources-btn"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;