import React, { useState, useEffect } from "react";
import "./SignInUp.css";

const UniversitySignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="university-auth-page">
      <h1 className="university-auth-title">Entreprise Sign in</h1>
      <p className="university-auth-subtitle">Sign in to your account</p>
      <form className="university-auth-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="university-auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default UniversitySignIn;