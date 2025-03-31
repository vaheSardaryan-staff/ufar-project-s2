import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  return (
    <div className="results-page">
      <h1>Your Top Career Matches</h1>
      <div className="results-grid">
        {results.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-icon">{result.icon}</div>
            <h2 className="result-title">{result.title}</h2>
            <p className="result-description">{result.description}</p>
            <button
              className="btn-primary"
              onClick={() => navigate(`/career-details/${result.id}`)} // Navigate to Careers with ID
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="results-actions">
        <button
          className="btn-secondary"
          onClick={() => navigate("/questionnaire")}
        >
          Retake Test
        </button>
        <button
          className="btn-primary"
          onClick={() => navigate("/full-analysis")}
        >
          Go to Full Analysis
        </button>
      </div>
    </div>
  );
};

export default Results;