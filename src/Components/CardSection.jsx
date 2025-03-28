import React, { useState } from "react";
import { Link } from "react-router";

const CardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      img: "l1.png",
      title: "UFAR",
      description:
        "The French University in Armenia is a higher education institution established in 2000 within the framework of the 1995 Agreement on Cultural, Scientific and Technical Cooperation between the Governments of Armenia and France.",
      link: "https://www.ufar.am/",
    },
    {
      img: "l2.jpeg",
      title: "NPUA",
      description:
        "During its 91 years of operation, the Polytechnic has given the country more than 130 thousand graduates, who have shaped the engineering potential, scientific and technical community, and industrial leadership of the Republic of Armenia.",
      link: "https://polytech.am/",
    },
    {
      img: "l3.ico",
      title: "AUA",
      description:
        "The American University of Armenia aims to have an impact on students and the community as a center of academic excellence, innovation, inquiry, and diversity that contributes to the further development and advancement of Armenia.",
      link: "https://aua.am/",
    },
    {
      img: "l4.png",
      title: "YSU",
      description:
        "Of its 3,150 employees, 1,190 comprise the teaching staff, which includes 25 academicians, 130 professors, 700 docents, and 360 assistant lecturers. The university has 400 researchers, 1,350 post-graduate students, and 8,500 undergraduates.",
      link: "https://aua.am/",
    },
    {
      img: "l5.png",
      title: "BSU",
      description:
        "The history of Brusov State University is a long story of establishment and development. For over 8 decades the university has educated progressive generations that brought their invaluable contribution to the fields of Language Education.",
      link: "https://brusov.am/en/",
    },
    {
      img: "l6.jpg",
      title: "RAU",
      description:
        "The Armenian-Russian University was established on the basis of the 'Agreement between the Government of Russia and Armenia on the Conditions for the Establishment and Operation of the Armenian-Russian University in Yerevan'.",
      link: "https://rau.am/am",
    },
    {
      img: "l7.png",
      title: "ASUE",
      description:
        "Today, in ASUE, dozens of doctors of science, professors, candidates of science, associate professors, and assistant professors lecture in the professional and non-professional departments of the university's 6 faculties.",
      link: "https://asue.am/",
    },
    {
      img: "l8.png",
      title: "EUA",
      description:
        "EUA, the Trusteeship Commission of the National Center for the Professional Education Quality Assurance, by the Decision of 12 April 2018, awarded the 'European University' Foundation with State Accreditation.",
      link: "https://www.eua.am/",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
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
            {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
              <div className="card" key={index}>
                <img src={card.img} className="card-img" alt={card.title} />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <Link
                  to={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  Learn More
                </Link>
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