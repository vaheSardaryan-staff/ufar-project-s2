import React from "react";
import { useParams } from "react-router-dom";
import careerData from "../../data/careerData"; // Import the career data
import "./CareerDetails.css";

const CareerDetails = () => {
  const { profession } = useParams(); // Get the profession ID from the URL
  const career = careerData[profession]; // Get the career details from the data file

  if (!career) {
    return (
      <div className="career-details-page">
        <h1 className="career-not-found">Career not found. Please select a valid career.</h1>
      </div>
    );
  }

  // Use default values for missing fields
  const advantages = career.advantages || [];
  const disadvantages = career.disadvantages || [];
  const visionInArmenia = career.VisionInArmenia || "No vision available for Armenia.";
  const visionInWorld = career.VisionInWorld || "No vision available worldwide.";

  return (
    <div className="career-details-page">
      <header className="career-header">
        <div className="career-icon">{career.icon}</div>
        <div className="career-header-content">
          <h1 className="career-header-title">{career.title}</h1>
        </div>
      </header>

      <div className="career-divider"></div>

      <section className="career-details">
        <h2 className="career-details-title">About the Career</h2>
        <p className="career-details-description">{career.description}</p>
      </section>

      <section className="career-advantages">
        <h2 className="career-advantages-title">Advantages</h2>
        <ul className="career-advantages-list">
          {advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
      </section>

      <section className="career-disadvantages">
        <h2 className="career-disadvantages-title">Disadvantages</h2>
        <ul className="career-disadvantages-list">
          {disadvantages.map((disadvantage, index) => (
            <li key={index}>{disadvantage}</li>
          ))}
        </ul>
      </section>

      <section className="career-vision">
        <h2 className="career-vision-title">Vision</h2>
        <p className="career-vision-content">
          <strong>In Armenia:</strong> {visionInArmenia}
        </p>
        <p className="career-vision-content">
          <strong>Worldwide:</strong> {visionInWorld}
        </p>
      </section>
    </div>
  );
};

export default CareerDetails;