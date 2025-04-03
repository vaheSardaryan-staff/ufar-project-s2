import React from "react";
import { useParams } from "react-router-dom";
import universitiesData from "../../data/universitiesData";
import "./UniversityDetails.css"; // Import your CSS file for styling

const UniversityDetails = () => {
  const { id } = useParams();
  const university = universitiesData.find((uni) => uni.id === parseInt(id));

  if (!university) {
    return <p>University not found.</p>;
  }

  return (
    <div className="university-details-page">
      <div className="university-details-header">
        <img
          src={university.image}
          alt={university.name}
          className="university-details-logo"
        />
        <div className="university-details-header-info">
          <h1>{university.name}</h1>
          <p>Industry: {university.industry}</p>
          <div className="university-details-stats">
            <span>{university.activeFaculties} active faculty(ies)</span>
            <span>{university.studentHistory} students</span>
          </div>
        </div>
      </div>

      <div className="university-details-about">
        <h2>About University</h2>
        <p>{university.info}</p>
        <a
          href={university.website}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-button"
        >
          Learn More
        </a>
      </div>

      <div className="university-details-faculties">
        <h2>Faculties</h2>
        {university.faculties.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <h3>{faculty.name}</h3>
            <p>Category: {faculty.category}</p>
            <p>Exam Subjects: {faculty.examSubjects.join(", ")}</p>
            <p>Scholarships: {faculty.scolarships}</p>
            <p>Tuition: {faculty.tuition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityDetails;