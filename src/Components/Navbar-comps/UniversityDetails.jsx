import React from "react";
import { useParams } from "react-router-dom";

const UniversityDetails = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
      <h1>University Details</h1>
      <p>Details for university with ID: {id}</p>
      {/* Fetch and display more details about the university here */}
    </div>
  );
};

export default UniversityDetails;