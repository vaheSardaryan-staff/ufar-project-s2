import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
          <section className="contact-section">
            <div className="container">
              <h2 className="section-title">Contact Us</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" placeholder="Write your message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
    );
}

export default ContactUs;