import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tutorsData from "../data/tutorsData.js";
import "./TutorView.css";

const TutorView = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const tutor = tutorsData.find((tutor) => tutor.id === parseInt(id));

  if (!tutor) {
    return <p>Tutor not found</p>;
  }

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="tutor-view-section">
      <div className="tutor-container">
        <div className="tutor-profile">
          <img
            src={tutor.profilePicture}
            alt={tutor.name}
            className="tutor-profile-picture"
          />
          <h2 className="tutor-name">{tutor.name}</h2>
          <p className="tutor-title">{tutor.title}</p>
        </div>

        <div className="tutor-details">
          <p>
            <i className="fas fa-book"></i> <strong>Subjects:</strong> {tutor.subjects.join(", ")}
          </p>
          <p>
            <i className="fas fa-star"></i> <strong>Rating:</strong> ⭐ {tutor.rating}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> {tutor.location}
          </p>
          <p>
            <i className="fas fa-dollar-sign"></i> <strong>Price:</strong> {tutor.price}
          </p>
          <button className="book-session-button" onClick={togglePopup}>
            Book a Session
          </button>
        </div>

        <div className="tutor-about">
          <h3>About</h3>
          <p>{tutor.bio}</p>
          <p>{tutor.experience}</p>
          <p>{tutor.qualifications}</p>
        </div>

        <div className="tutor-reviews">
          <h3>Reviews</h3>
          {tutor.reviews.map((review, index) => (
            <div className="review" key={index}>
              <p className="review-user">{review.user}</p>
              <p className="review-rating">Rating: ⭐ {review.rating}</p>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-envelope"></i> <strong>Email:</strong> {tutor.email}
            </p>
            <p>
              <i className="fas fa-phone"></i> <strong>Phone:</strong> {tutor.phoneNum}
            </p>
            <button className="close-popup-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TutorView;