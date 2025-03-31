import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./UniversityDetails.css";

const UniversityDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const universities = [
    {
      id: 1,
      name: "UFAR - French University of Armenia",
      image: "/l1.png",
      info: "The French University in Armenia is a higher education institution established in 2000 within the framework of the 1995 Agreement on Cultural, Scientific and Technical Cooperation between the Governments of Armenia and France.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 2,
      name: "Polytech",
      image: "/l2.jpeg",
      info: "During its 91 years of operation, the Polytechnic has given the country more than 130 thousand graduates, who have shaped the engineering potential, scientific and technical community, and industrial leadership of the Republic of Armenia.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 3,
      name: "AUA - American University of Armenia",
      image: "/l3.ico",
      info: "The American University of Armenia aims to have an impact on students and the community as a center of academic excellence, innovation, inquiry, and diversity that contributes to the further development and advancement of Armenia.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 4,
      name: "YSU - Yerevan State University",
      image: "/l4.png",
      info: "Yerevan State University is the oldest and most prestigious university in Armenia, offering a wide range of programs and fostering academic excellence.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 5,
      name: "BSU - Brusov State University",
      image: "/l5.png",
      info: "Brusov State University is known for its focus on language education and cultural studies, shaping generations of progressive thinkers.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 6,
      name: "RAU - Russian-Armenian University",
      image: "/l6.jpg",
      info: "The Russian-Armenian University was established to foster collaboration between Armenia and Russia, offering diverse programs and research opportunities.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 7,
      name: "ASUE - Armenian State University of Economics",
      image: "/l7.png",
      info: "ASUE is a leading institution in Armenia for economics and business studies, preparing students for leadership roles in the global economy.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
    {
      id: 8,
      name: "EUA - European University of Armenia",
      image: "/l8.png",
      info: "The European University of Armenia is recognized for its innovative programs and commitment to quality education, fostering a global perspective.",
      industry: "Education",
      followers: 137,
      activeFaculties: 0,
      studentHistory: 192,
      views: 55312,
    },
  ];

  const university = universities.find((uni) => uni.id === parseInt(id));

  if (!university) {
    return <p>University not found.</p>;
  }

  return (
    <div className="university-details-page">
      <div className="university-details-header">
        <img
          src={university.image}
          alt={university.name}
          className="university-details-logo"
        />
        <div className="university-details-header-info">
          <h1>{university.name}</h1>
          <p>Industry: {university.industry}</p>
          <div className="university-details-stats">
            <span>{university.views} page views</span>
            <span>{university.followers} follower(s)</span>
            <span>{university.activeFaculties} active faculty(ies)</span>
            <span>{university.studentHistory} students</span>
          </div>
        </div>
      </div>
  
      <div className="university-details-about">
        <h2>About Company</h2>
        <p>{university.info}</p>
      </div>
    </div>
  );
};

export default UniversityDetails;