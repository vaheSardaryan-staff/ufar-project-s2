import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignInUp.css";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    educationLevel: "",
    number: "",
    email: "",
    dateOfBirth: "",
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


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to sign up");
      }
  
      const result = await response.json();
      console.log("Sign-up successful:", result);
      alert("Sign-up successful!");
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="auth-page-full">
      <h1 className="auth-title">Create an Account</h1>
      <p className="auth-subtitle">Sign up to get started</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
        >
          <option value="">Select Education Level</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
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
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
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
        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>
      <p className="auth-footer">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;