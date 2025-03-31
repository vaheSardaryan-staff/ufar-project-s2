import React, { useState } from "react";
import { useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./TutorsList.css";

const TutorsList = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    subject: "",
    rating: "",
    location: "",
    priceRange: "",
  });

  const navigate = useNavigate(); 

  const tutors = [
    {
      id: 1,
      name: "John Doe",
      title: "Expert Math Tutor",
      subjects: ["Math", "Physics"],
      rating: 4.8,
      location: "Remote",
      price: "$30/hour",
      bio: "Passionate about helping students excel in math and physics.",
      profilePicture: "./tutor1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "English Literature Specialist",
      subjects: ["English", "Writing"],
      rating: 4.5,
      location: "New York",
      price: "$25/hour",
      bio: "Helping students master English and creative writing.",
      profilePicture: "./tutor2.jpg",
    },
    
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredTutors = tutors.filter((tutor) => {
    return (
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.subject ? tutor.subjects.includes(filters.subject) : true) &&
      (filters.rating ? tutor.rating >= parseFloat(filters.rating) : true) &&
      (filters.location ? tutor.location === filters.location : true)
    );
  });

  const handleViewProfile = (id) => {
    navigate(`/tutors/${id}`); 
  };

  return (
    <section className="tutors-list-section">
      <div className="container">
        <h2 className="tutors-list-title">Find Your Tutor</h2>

        {}
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name, subject, or expertise..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {}
        <div className="filters">
          <select name="subject" onChange={handleFilterChange}>
            <option value="">All Subjects</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Physics">Physics</option>
          </select>
          <select name="rating" onChange={handleFilterChange}>
            <option value="">All Ratings</option>
            <option value="4.5">⭐ 4.5+</option>
            <option value="4.0">⭐ 4.0+</option>
          </select>
          <select name="location" onChange={handleFilterChange}>
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="New York">New York</option>
          </select>
        </div>

        {}
        <div className="tutors-grid">
          {filteredTutors.map((tutor) => (
            <div className="tutor-card" key={tutor.id}>
              <img
                src={tutor.profilePicture}
                alt={tutor.name}
                className="tutor-profile-picture"
              />
              <h3 className="tutor-name">{tutor.name}</h3>
              <p className="tutor-title">{tutor.title}</p>
              <p className="tutor-subjects">Subjects: {tutor.subjects.join(", ")}</p>
              <p className="tutor-rating">Rating: ⭐ {tutor.rating}</p>
              <p className="tutor-price">{tutor.price}</p>
              <p className="tutor-bio">{tutor.bio}</p>
              <button
                className="view-profile-button"
                onClick={() => handleViewProfile(tutor.id)} 
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsList;