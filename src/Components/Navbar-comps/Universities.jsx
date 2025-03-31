import React from "react";
import { Link } from "react-router-dom";
import "./Universities.css";

const Universities = () => {
  const universities = [
    {
      id: 1,
      name: "UFAR - French University of Armenia",
      image: "l1.png",
      info: "The French University in Armenia is a higher education institution established in 2000 within the framework of the 1995 Agreement on Cultural, Scientific and Technical Cooperation between the Governments of Armenia and France.",
    },
    {
      id: 2,
      name: "Polytech",
      image: "l2.jpeg",
      info: "During its 91 years of operation, the Polytechnic has given the country more than 130 thousand graduates, who have shaped the engineering potential, scientific and technical community, and industrial leadership of the Republic of Armenia.",
    },
    {
      id: 3,
      name: "AUA - American University of Armenia",
      image: "l3.ico",
      info: "The American University of Armenia aims to have an impact on students and the community as a center of academic excellence, innovation, inquiry, and diversity that contributes to the further development and advancement of Armenia.",
    },
    {
      id: 4,
      name: "YSU - Yerevan State University",
      image: "l4.png",
      info: "Yerevan State University is the oldest and most prestigious university in Armenia, offering a wide range of programs and fostering academic excellence.",
    },
    {
      id: 5,
      name: "BSU - Brusov State University",
      image: "l5.png",
      info: "Brusov State University is known for its focus on language education and cultural studies, shaping generations of progressive thinkers.",
    },
    {
      id: 6,
      name: "RAU - Russian-Armenian University",
      image: "l6.jpg",
      info: "The Russian-Armenian University was established to foster collaboration between Armenia and Russia, offering diverse programs and research opportunities.",
    },
    {
      id: 7,
      name: "ASUE - Armenian State University of Economics",
      image: "l7.png",
      info: "ASUE is a leading institution in Armenia for economics and business studies, preparing students for leadership roles in the global economy.",
    },
    {
      id: 8,
      name: "EUA - European University of Armenia",
      image: "l8.png",
      info: "The European University of Armenia is recognized for its innovative programs and commitment to quality education, fostering a global perspective.",
    },
  ];

  return (
    <div className="unique-universities-page">
      <div className="container">
        <h1 className="text-center my-4">Universities</h1>
        <p className="text-center mb-4">Explore top universities around the world.</p>

        {universities.map((university) => (
          <div key={university.id} className="unique-university-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={university.image}
                  alt={university.name}
                  className="img-fluid unique-university-image"
                />
              </div>

              <div className="col-md-8">
                <div className="unique-card-body">
                  <h5 className="unique-card-title">{university.name}</h5>
                  <p className="unique-card-text">{university.info}</p>
                  <Link
                    to={`/universities/${university.id}`}
                    className="unique-btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;