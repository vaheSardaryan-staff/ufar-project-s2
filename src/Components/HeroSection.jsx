import React from "react";
import { Link } from "react-router";
import "./HeroSection.css";

const HeroSection = () => {
    return ( 
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
            Empowering Future Students: Your Guide to Higher Education
            </h1>
            <p>
            Navigating the path to higher education can be overwhelming, but our platform is here to make the journey smoother. Whether you're planning for a bachelor's or master's degree, we provide everything you need to make informed decisions about your future studies.

            From selecting the right university and program to finding scholarships, career advice, and student experiences, we offer a one-stop hub for all aspiring students. Our goal is to make education more accessible by providing reliable guidance, resources, and a supportive community.

            Join us and take the first step towards a successful academic journey with confidence!
            </p>
            <div className="buttons">
              <Link to="/questionnaire" className="btn-primary">Take a test!</Link>
            </div>
          </div>
        </div>
      </section>
    );
}
export default HeroSection;