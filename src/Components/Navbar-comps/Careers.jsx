import React, { useState } from "react";
import { Link } from "react-router-dom";
import careerData from "../../data/careerData"; // Import career data
import "./Careers.css";

const Careers = () => {
  // Extract profession titles from careerData
  const professions = Object.values(careerData).map((career) => career.title);

  const [currentPage, setCurrentPage] = useState(1);
  const professionsPerPage = 10;

  const indexOfLastProfession = currentPage * professionsPerPage;
  const indexOfFirstProfession = indexOfLastProfession - professionsPerPage;
  const currentProfessions = professions.slice(
    indexOfFirstProfession,
    indexOfLastProfession
  );

  const totalPages = Math.ceil(professions.length / professionsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.documentElement || document.body;
    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="careers-page">
      <h1 className="careers-title">Explore Careers</h1>
      <ul className="careers-list">
        {currentProfessions.map((profession, index) => (
          <li key={index} className="careers-item">
            <span>{profession}</span>
            <Link
              to={`/career-details/${profession.toLowerCase().replace(/ /g, "-")}`}
              className="details-button"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Careers;