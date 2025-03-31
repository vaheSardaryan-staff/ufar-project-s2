import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FullAnalysis.css";

const FullAnalysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const professions = location.state?.results || []; 

  return (
    <div className="full-analysis-page">
      <header className="analysis-header">
        <h1>In-Depth Career Analysis</h1>
        <p>Explore detailed insights into your top career matches.</p>
      </header>

      <div className="professions-tabs">
        {professions.map((profession, index) => (
          <div key={profession.id} className="profession-tab">
            <div className="profession-icon">{profession.icon}</div>
            <h2>{profession.title}</h2>
            <p>{profession.description}</p>
          </div>
        ))}
      </div>

      <section className="analysis-section">
        <h2>Advantages & Opportunities</h2>
        <p>Explore job market demand, career paths, and industries hiring for this profession.</p>
        <ul>
          <li>Job Market Demand: High growth in the next 10 years.</li>
          <li>Career Paths: Entry-level, mid-level, and senior-level opportunities.</li>
          <li>Industries Hiring: Technology, healthcare, education, and more.</li>
        </ul>
      </section>

      <section className="analysis-section">
        <h2>University & Study Path Comparison</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>University</th>
              <th>Degree Type</th>
              <th>Tuition Fees</th>
              <th>Scholarships</th>
              <th>Study Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harvard University</td>
              <td>Bachelor's</td>
              <td>$50,000/year</td>
              <td>Available</td>
              <td>Online & On-Campus</td>
            </tr>
            <tr>
              <td>Stanford University</td>
              <td>Master's</td>
              <td>$60,000/year</td>
              <td>Available</td>
              <td>On-Campus</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="analysis-section">
        <h2>Required Subjects & Learning Resources</h2>
        <p>Subjects needed: Math, Science, and Art.</p>
        <ul>
          <li>Books: "Introduction to Algorithms", "The Art of Design".</li>
          <li>Courses: Coursera, Udemy, and Khan Academy.</li>
          <li>Interactive Tools: Flashcards and quizzes for self-study.</li>
        </ul>
      </section>

      <section className="analysis-section">
        <h2>Tutor Recommendations & Learning Support</h2>
        <div className="tutors-list">
          <div className="tutor-card">
            <h3>John Doe</h3>
            <p>Specialization: Math</p>
            <p>Rating: 4.8/5</p>
            <button className="btn-primary" onClick={() => navigate("/schedule-tutor")}>
              Book a Tutor
            </button>
          </div>
          <div className="tutor-card">
            <h3>Jane Smith</h3>
            <p>Specialization: Science</p>
            <p>Rating: 4.9/5</p>
            <button className="btn-primary" onClick={() => navigate("/schedule-tutor")}>
              Book a Tutor
            </button>
          </div>
        </div>
      </section>

      <div className="action-buttons">
        <button className="btn-secondary" onClick={() => navigate("/save-analysis")}>
          Save Analysis
        </button>
        <button className="btn-primary" onClick={() => navigate("/university-search")}>
          Find a University
        </button>
        <button className="btn-primary" onClick={() => navigate("/career-guidance")}>
          Get Career Guidance
        </button>
      </div>
    </div>
  );
};

export default FullAnalysis;