import React, { useState } from "react";
import "./CardSection.css";

const CardSection = () => {
  const cards = [
    {
      img: "./l1.png", // Ensure images are in the public/images folder
      title: "UFAR",
      description:
        "The French University in Armenia is a higher education institution established in 2000 within the framework of the 1995 Agreement on Cultural, Scientific and Technical Cooperation between the Governments of Armenia and France.",
      link: "https://www.ufar.am/",
    },
    {
      img: "./l2.jpeg",
      title: "NPUA",
      description:
        "During its 91 years of operation, the Polytechnic has given the country more than 130 thousand graduates, who have shaped the engineering potential, scientific and technical community, and industrial leadership of the Republic of Armenia.",
      link: "https://polytech.am/",
    },
    {
      img: "./l3.ico",
      title: "AUA",
      description:
        "The American University of Armenia aims to have an impact on students and the community as a center of academic excellence, innovation, inquiry, and diversity that contributes to the further development and advancement of Armenia.",
      link: "https://aua.am/",
    },
    {
      img: "./l4.png",
      title: "YSU",
      description:
        "Of its 3,150 employees, 1,190 comprise the teaching staff, which includes 25 academicians, 130 professors, 700 docents, and 360 assistant lecturers. The university has 400 researchers, 1,350 post-graduate students, and 8,500 undergraduates.",
      link: "https://ysu.am/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // State for current index

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleCards = () => {
    const visible = [];
    const totalCards = cards.length;

    for (let i = 0; i < Math.min(4, totalCards); i++) {
      visible.push(cards[(currentIndex + i) % totalCards]);
    }

    return visible;
  };

  return (
    <section className="card-section">
      <div className="container">
        <h2 className="section-title">Featured Universities</h2>
        <div className="carousel">
          <button className="carousel-arrow left-arrow" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="card-grid">
            {visibleCards().map((card, index) => (
              <div className="card" key={index}>
                <img src={card.img} className="card-img" alt={card.title} />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right-arrow" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;