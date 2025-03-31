import React from "react";
import { Link } from "react-router-dom";
import "./FindTutor.css";

const FindTutor = () => {
  return (
    <section className="find-tutor-section">
      <div className="container">
        <h2 className="find-tutor-title">Find a Tutor!</h2>
        <p className="find-tutor-description">
          Unlock your full potential with expert guidance! Whether you're preparing for exams, mastering a new subject, or simply expanding your knowledge, our tutors are here to help. Browse through experienced professionals, compare ratings, and book personalized lessons that fit your schedule. Learning has never been this easy—start today and take the next step toward success! 🚀
        </p>
        <Link to="/tutors" className="find-tutor-button">
          Connect with a Tutor
        </Link>
      </div>
    </section>
  );
};

export default FindTutor;