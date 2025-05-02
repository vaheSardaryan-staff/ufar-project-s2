import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tutorsData from "../data/tutorsData";
import "./TutorsList.css";

const TutorsList = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    subject: "",
    location: "",
  });
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const tutorsPerPage = 8;

  const subjects = ["All Subjects", ...new Set(tutorsData.flatMap((tutor) => tutor.subjects))];
  const locations = ["All Locations", ...new Set(tutorsData.map((tutor) => tutor.location))];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredTutors = tutorsData
    .filter((tutor) => {
      const tutorName = tutor.name || "";
      return (
        tutorName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.subject && filters.subject !== "All Subjects"
          ? tutor.subjects?.includes(filters.subject)
          : true) &&
        (filters.location && filters.location !== "All Locations"
          ? tutor.location === filters.location
          : true)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });

  const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage);
  const startIndex = (currentPage - 1) * tutorsPerPage;
  const currentTutors = filteredTutors.slice(startIndex, startIndex + tutorsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
  
    <section className="tutors-list-section">
      <div className="container">
        <h1 className="tutors-list-title">Find Your Perfect Tutor</h1>
        <p className="tutors-list-subtitle">
          Search, filter, and sort to find the best tutor for your needs.
        </p>

        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by name, subject, or expertise..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="filters-container">
          <select name="subject" onChange={handleFilterChange}>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <select name="location" onChange={handleFilterChange}>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select name="sortOrder" onChange={handleSortChange}>
            <option value="desc">Sort by Rating: High to Low</option>
            <option value="asc">Sort by Rating: Low to High</option>
          </select>
        </div>

        <div className="tutors-grid">
          {currentTutors.map((tutor) => (
            <div className="tutor-card" key={tutor.id}>
              <img
                src={tutor.profilePicture}
                alt={tutor.name}
                className="tutor-profile-picture"
              />
              <h3 className="tutor-name">{tutor.name}</h3>
              <p className="tutor-title">{tutor.title}</p>
              <p className="tutor-subjects">
                Subjects: {tutor.subjects ? tutor.subjects.join(", ") : "N/A"}
              </p>
              <p className="tutor-rating">Rating: ⭐ {tutor.rating}</p>
              <p className="tutor-price">{tutor.price}</p>
              <p className="tutor-bio">{tutor.bio}</p>
              <Link to={`/tutors/${tutor.id}`} className="view-more-button">
                View More
              </Link>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorsList;