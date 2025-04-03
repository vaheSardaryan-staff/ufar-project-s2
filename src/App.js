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
import Careers from "./Components/Navbar-comps/Careers.jsx";
import CareerDetails from "./Components/Navbar-comps/CareerDetails.jsx";
import Resources from "./Components/Navbar-comps/Resources";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import UniversitySignUp from "./Components/UniversitySignUp";
import UniversitySignIn from "./Components/UniversitySignIn";
import Questionnaire from "./Components/Questionnaire";
import Results from "./Components/Results";
import FullAnalysis from "./Components/FullAnalysis";
import Banner from "./Components/Banner";
import FindTutor from "./Components/FindTutor.jsx";
import TutorsList from "./Components/TutorsList";
import TutorView from "./Components/TutorView";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner
        jpgUrl="./banner1.jpg"
        linkUrl="https://ufar.am/admission/bachelors"
        altText="Promotional Banner"
      />
      <main className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CardSection />
                <FindTutor />
                <Testimonials />
                <ContactUs />
              </>
            }
          />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/full-analysis" element={<FullAnalysis />} />
          <Route path="/tutors" element={<TutorsList />} />
          <Route path="/tutors/:id" element={<TutorView />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career-details/:profession" element={<CareerDetails />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/university-signup" element={<UniversitySignUp />} />
          <Route path="/university-signin" element={<UniversitySignIn />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}