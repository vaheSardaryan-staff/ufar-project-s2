import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CardSection from "./Components/CardSection.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Footer from "./Components/Footer.jsx";
import Universities from "./Components/Navbar-comps/Universities";
import UniversityDetails from "./Components/Navbar-comps/UniversityDetails.jsx";
import Tests from "./Components/Navbar-comps/Tests.jsx";
import Resources from "./Components/Navbar-comps/Resources";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import UniversitySignUp from "./Components/UniversitySignUp";
import UniversitySignIn from "./Components/UniversitySignIn";

export default function App() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="content-wrapper">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CardSection />
                <Testimonials />
                <ContactUs />
              </>
            }
          />

          {/* Universities Route */}
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />

          {/* Tests Route */}
          <Route path="/tests" element={<Tests />} />

          {/* Resources Route */}
          <Route path="/resources" element={<Resources />} />

          {/* Sign Up Route */}
          <Route path="/signup" element={<SignUp />} />

          {/* Sign In Route */}
          <Route path="/signin" element={<SignIn />} />

          {/* Uni Sign Up Route */}
          <Route path="/university-signup" element={<UniversitySignUp />} />

          {/* Uni Sign In Route */}
          <Route path="/university-signin" element={<UniversitySignIn />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}