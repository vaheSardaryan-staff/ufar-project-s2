import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./TutorView.css";

const TutorView = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const { id } = useParams();

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
      experience: "5+ years of teaching experience.",
      qualifications: "MSc in Mathematics from XYZ University.",
      profilePicture: "./tutor1.jpg",
      reviews: [
        { user: "Alice", rating: 5, comment: "Great tutor, very helpful!" },
        { user: "Bob", rating: 4.5, comment: "Explains concepts clearly." },
      ],
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
      experience: "3+ years of teaching experience.",
      qualifications: "BA in English Literature from ABC University.",
      profilePicture: "./tutor2.jpg",
      reviews: [
        { user: "Charlie", rating: 5, comment: "Very knowledgeable and patient." },
        { user: "Diana", rating: 4.5, comment: "Helped me improve my writing skills." },
      ],
    },
  ];

  const tutor = tutors.find((tutor) => tutor.id === parseInt(id)); 

  if (!tutor) {
    return <p>Tutor not found</p>;
  }

  return (
    <section className="tutor-view-section">
      <div className="container">
        <div className="tutor-profile">
          <img
            src={tutor.profilePicture}
            alt={tutor.name}
            className="tutor-profile-picture"
          />
          <h2 className="tutor-name">{tutor.name}</h2>
          <p className="tutor-title">{tutor.title}</p>
          <p className="tutor-subjects">Subjects: {tutor.subjects.join(", ")}</p>
          <p className="tutor-rating">Rating: ⭐ {tutor.rating}</p>
          <p className="tutor-location">Location: {tutor.location}</p>
          <p className="tutor-price">{tutor.price}</p>
          <button className="book-session-button">Book a Session</button>
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
    </section>
  );
};

export default TutorView;