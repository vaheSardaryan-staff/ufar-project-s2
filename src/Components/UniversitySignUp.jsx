import React, { useState, useEffect } from "react";
import "./SignInUp.css";

const UniversitySignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    userType: "University",
    universityName: "",
    hrName: "",
    country: "",
    city: "",
    taxNumber: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    tutorName: "",
    cv: null,
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions!");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="university-auth-page">
      <h1 className="university-auth-title">Registration</h1>
      <p className="university-auth-subtitle">Sign up to join our platform</p>
      <form className="university-auth-form" onSubmit={handleSubmit}>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="userType"
              value="University"
              checked={formData.userType === "University"}
              onChange={handleChange}
            />
            University
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="Tutor"
              checked={formData.userType === "Tutor"}
              onChange={handleChange}
            />
            Tutor
          </label>
        </div>
        {formData.userType === "University" && (
          <>
            <input
              type="text"
              name="universityName"
              placeholder="University Name"
              value={formData.universityName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="hrName"
              placeholder="HR Name"
              value={formData.hrName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="taxNumber"
              placeholder="TAX Number"
              value={formData.taxNumber}
              onChange={handleChange}
              required
            />
          </>
        )}

        {formData.userType === "Tutor" && (
          <>
            <input
              type="text"
              name="tutorName"
              placeholder="Tutor Name"
              value={formData.tutorName}
              onChange={handleChange}
              required
            />
            <div className="file-input-container">
              <label htmlFor="cv">Upload CV:</label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label>
            I agree to the <span>terms and conditions</span>.
          </label>
        </div>
        <button type="submit" className="university-auth-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UniversitySignUp;