import React, { useState, useEffect } from "react";

const Tests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendedUniversities, setRecommendedUniversities] = useState([]);

  const universities = [
    {
      id: 1,
      name: "UFAR - French University of Armenia",
      faculties: ["Business", "Law"],
      tuition: "$3,000/year",
      advantages: ["French education", "Cultural exchange"],
      disadvantages: ["Limited engineering programs"],
    },
    {
      id: 2,
      name: "Polytech",
      faculties: ["Engineering", "Computer Science"],
      tuition: "$5,000/year",
      advantages: ["Strong engineering programs", "Research opportunities"],
      disadvantages: ["Limited business programs"],
    },
    {
      id: 3,
      name: "AUA - American University of Armenia",
      faculties: ["Liberal Arts", "Technology"],
      tuition: "$4,000/year",
      advantages: ["American education", "Diverse programs"],
      disadvantages: ["Higher tuition fees"],
    },
  ];

  const questions = [
    { id: 1, question: "What subject are you interested in?", key: "subject", options: ["Engineering", "Business", "Arts", "Technology"] },
    { id: 2, question: "What category do you prefer?", key: "category", options: ["Research", "Practical", "Creative"] },
    { id: 3, question: "What skills do you have?", key: "skills", options: ["Problem-solving", "Leadership", "Creativity"] },
    { id: 4, question: "What is your preferred study location?", key: "location", options: ["Armenia", "France", "USA"] },
    { id: 5, question: "What is your budget for tuition fees?", key: "budget", options: ["$3,000-$5,000", "$5,000-$10,000", "Above $10,000"] },
    { id: 6, question: "Do you prefer theoretical or practical learning?", key: "learning", options: ["Theoretical", "Practical"] },
    { id: 7, question: "Are you interested in research opportunities?", key: "research", options: ["Yes", "No"] },
    { id: 8, question: "Do you prefer small or large class sizes?", key: "classSize", options: ["Small", "Large"] },
    { id: 9, question: "What is your preferred language of instruction?", key: "language", options: ["English", "French", "Armenian"] },
    { id: 10, question: "Do you want access to international exchange programs?", key: "exchange", options: ["Yes", "No"] },
    { id: 11, question: "What is your preferred faculty?", key: "faculty", options: ["Engineering", "Business", "Arts"] },
    { id: 12, question: "Do you prefer urban or rural campuses?", key: "campus", options: ["Urban", "Rural"] },
    { id: 13, question: "Are extracurricular activities important to you?", key: "extracurricular", options: ["Yes", "No"] },
    { id: 14, question: "Do you value cultural diversity in a university?", key: "diversity", options: ["Yes", "No"] },
    { id: 15, question: "Do you prefer universities with strong alumni networks?", key: "alumni", options: ["Yes", "No"] },
  ];

  const handleInputChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Simple logic to recommend universities based on answers
    const recommendations = universities.slice(0, 3); // Replace with actual matching logic
    setRecommendedUniversities(recommendations);
  };

  return (
    <div className="unique-tests-page">
      <div className="unique-tests-container">
        <h1 className="text-center unique-tests-title">Find Your Best Match</h1>
        <p className="text-center unique-tests-description">
          Answer the following questions to find the best universities for you.
        </p>

        {/* Question Card */}
        <div className="unique-tests-card">
          <div className="unique-tests-card-body">
            <h5 className="unique-tests-card-title">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h5>
            <p className="unique-tests-card-text">{questions[currentQuestionIndex].question}</p>
            <select
              className="form-select unique-tests-select"
              value={answers[questions[currentQuestionIndex].key] || ""}
              onChange={(e) =>
                handleInputChange(questions[currentQuestionIndex].key, e.target.value)
              }
            >
              <option value="">Select...</option>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="unique-tests-card-footer">
            <button
              className="btn unique-tests-btn"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button className="btn unique-tests-btn" onClick={handleSubmit}>
                Finish
              </button>
            ) : (
              <button className="btn unique-tests-btn" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>

        {/* Recommended Universities */}
        {recommendedUniversities.length > 0 && (
          <div className="unique-tests-recommendations mt-5">
            <h2 className="text-center unique-tests-recommendations-title">Recommended Universities</h2>
            <div className="row">
              {recommendedUniversities.map((university) => (
                <div key={university.id} className="col-md-4 mb-4">
                  <div className="unique-tests-card">
                    <div className="unique-tests-card-body">
                      <h5 className="unique-tests-card-title">{university.name}</h5>
                      <p className="unique-tests-card-text">
                        <strong>Faculties:</strong> {university.faculties.join(", ")}
                      </p>
                      <p className="unique-tests-card-text">
                        <strong>Tuition:</strong> {university.tuition}
                      </p>
                      <p className="unique-tests-card-text">
                        <strong>Advantages:</strong> {university.advantages.join(", ")}
                      </p>
                      <p className="unique-tests-card-text">
                        <strong>Disadvantages:</strong> {university.disadvantages.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tests;