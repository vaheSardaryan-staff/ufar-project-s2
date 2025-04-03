import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  return (
    <div className="results-page">
      <h1 className="results-title">Your Top Career Matches</h1>
      <div className="results-grid">
        {results.map((result) => (
          <div key={result.id} className="results-card">
            <div className="results-icon">{result.icon}</div>
            <h2 className="results-card-title">{result.title}</h2>
            <p className="results-card-description">{result.description}</p>
            <button
              className="results-btn-primary"
              onClick={() => navigate(`/full-analysis?profession=${result.id}`)}
            >
              Go to Full Analysis
            </button>
          </div>
        ))}
      </div>
      <div className="results-actions">
        <button
          className="results-btn-secondary"
          onClick={() => navigate("/questionnaire")}
        >
          Retake Test
        </button>
      </div>
    </div>
  );
};

export default Results;