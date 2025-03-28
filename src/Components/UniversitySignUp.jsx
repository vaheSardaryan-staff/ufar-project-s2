import React, { useState, useEffect } from "react";

const UniversitySignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    universityName: "",
    hrName: "",
    country: "",
    city: "",
    taxNumber: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="university-auth-page">
      <h1 className="university-auth-title">University Registration</h1>
      <p className="university-auth-subtitle">Sign up to join our platform</p>
      <form className="university-auth-form" onSubmit={handleSubmit}>
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
          type="text"
          name="taxNumber"
          placeholder="TAX Number"
          value={formData.taxNumber}
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