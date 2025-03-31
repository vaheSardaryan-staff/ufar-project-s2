import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
        <div className="container">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
            <div className="testimonial">
            <p>"This platform has revolutionized the way we manage student data. Highly recommended!"</p>
            <h4>- John Doe, University Admin</h4>
            </div>
            <div className="testimonial">
            <p>"The tools provided have made my learning experience much more efficient and enjoyable."</p>
            <h4>- Jane Smith, Student</h4>
            </div>
            <div className="testimonial">
            <p>"A seamless integration with our existing systems. Great support team as well!"</p>
            <h4>- Michael Brown, IT Manager</h4>
            </div>
        </div>
        </div>
        </section>
    );
}

export default Testimonials;