import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import careerData from "../data/careerData";
import tutorsData from "../data/tutorsData";
import resourcesData from "../data/resourcesData";
import universitiesData from "../data/universitiesData";
import "./FullAnalysis.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FullAnalysis = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [showSupportPopup, setShowSupportPopup] = useState(false); // Stfdate vcfor support popup
  const [supportForm, setSupportForm] = useState({
    email: "",
    name: "",
    surname: "",
    subject: "",
    description: "",
  });

  const location = useLocation();
  const professionKey = new URLSearchParams(location.search).get("profession");

  const profession = careerData[professionKey];

  if (!profession) {
    return <p>Profession not found. Please check the profession key.</p>;
  }

  const handleSupportInputChange = (e) => {
    const { name, value } = e.target;
    setSupportForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    console.log("Support Form Submitted:", supportForm);
    alert("Your support request has been submitted!");
    setShowSupportPopup(false); // Close the popup after submission
    setSupportForm({
      email: "",
      name: "",
      surname: "",
      subject: "",
      description: "",
    });
  };

  const isSemanticallyRelated = (term1, term2) => {
    if (!term1 || !term2) return false;
    term1 = term1.toLowerCase();
    term2 = term2.toLowerCase();

    if (term1.includes(term2) || term2.includes(term1)) return true;

    const synonyms = {
      "technology": ["tech", "it", "computer science", "software"],
      "business": ["management", "finance", "marketing", "economics"],
      "engineering": ["mechanical", "civil", "electrical", "design"],
      "health sciences": ["medicine", "nursing", "pharmacy", "biology"],
      "social sciences": ["politics", "history", "psychology", "sociology"],
      "humanities": ["literature", "linguistics", "philosophy", "arts"],
    };

    for (const [key, relatedTerms] of Object.entries(synonyms)) {
      if (
        (term1 === key || relatedTerms.includes(term1)) &&
        (term2 === key || relatedTerms.includes(term2))
      ) {
        return true;
      }
    }

    return false;
  };

  const matchesData = (professionData, itemData) => {
    if (!Array.isArray(professionData) || !Array.isArray(itemData)) return false;
    return professionData.some((professionTerm) =>
      itemData.some((itemTerm) => isSemanticallyRelated(professionTerm, itemTerm))
    );
  };

  const relatedUniversities = universitiesData
    .map((university) => {
      const relevantFaculties = university.faculties.filter(
        (faculty) =>
          matchesData(profession.category, [faculty.category]) ||
          matchesData(profession.relatedSubjects, faculty.examSubjects) ||
          isSemanticallyRelated(profession.title, faculty.name)
      );
      return relevantFaculties.length > 0
        ? { ...university, faculties: relevantFaculties }
        : null;
    })
    .filter((university) => university !== null);

  const fallbackUniversities = relatedUniversities.length === 0 ? (
    <p className="full-analysis-no-data">
      No specific universities found. Check universities offering programs in{" "}
      {profession.category.join(", ")}.
    </p>
  ) : null;

  const saveAsPDF = () => {
    const content = document.querySelector(".full-analysis-page"); // Select the content to export
    const pdf = new jsPDF("p", "mm", "a4"); // Create a new PDF in A4 format

    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${profession.title}-analysis.pdf`); // Save the PDF with a dynamic filename
    });
  };

  return (
    <div className="full-analysis-page">
      <h1 className="full-analysis-title">{profession.title}</h1>
      <p className="full-analysis-description">{profession.description}</p>
      <div className="full-analysis-details">
        <h2>Advantages</h2>
        <ul>
          {profession.advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
        <h2>Disadvantages</h2>
        <ul>
          {profession.disadvantages.map((disadvantage, index) => (
            <li key={index}>{disadvantage}</li>
          ))}
        </ul>
        <h2>Vision in Armenia</h2>
        <p>{profession.VisionInArmenia}</p>
        <h2>Vision in the World</h2>
        <p>{profession.VisionInWorld}</p>
      </div>
      <div className="full-analysis-section">
        <h2 className="full-analysis-section-title">University Comparison</h2>
        {relatedUniversities.length > 0 ? (
          <table className="full-analysis-table">
            <thead>
              <tr>
                <th>University</th>
                <th>Faculty</th>
                <th>Category</th>
                <th>Exam Subjects</th>
                <th>Scholarships</th>
                <th>Tuition</th>
                <th>Apply</th> {/* New column for Apply */}
              </tr>
            </thead>
            <tbody>
              {relatedUniversities.map((university) =>
                university.faculties.map((faculty, index) => (
                  <tr key={`${university.id}-${index}`}>
                    <td>{university.name}</td>
                    <td>{faculty.name}</td>
                    <td>{faculty.category}</td>
                    <td>{faculty.examSubjects.join(", ")}</td>
                    <td>{faculty.scholarships}</td>
                    <td>{faculty.tuition}</td>
                    <td>
                      <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apply-link"
                      >
                        Apply
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          fallbackUniversities
        )}
      </div>

        {/* Useful Resources Section */}
<div className="useful-resources-section">
  <h2 className="useful-resources-title">Useful Resources for Preparation</h2>
  {relatedUniversities.length > 0 ? (
    (() => {
      // Step 1: Extract all unique exam subjects from faculties
      const allExamSubjects = new Set();
      relatedUniversities.forEach((university) => {
        university.faculties.forEach((faculty) => {
          if (Array.isArray(faculty.examSubjects)) {
            faculty.examSubjects.forEach((subject) => allExamSubjects.add(subject));
          }
        });
      });

      // Convert Set to Array
      const examSubjectsArray = Array.from(allExamSubjects);

      console.log("Extracted Exam Subjects:", examSubjectsArray);

      // Step 2: Match resources with exam subjects
      const resourcesBySubject = examSubjectsArray.map((subject) => {
        const relatedResources = resourcesData.filter(
          (resource) =>
            resource.subject.toLowerCase() === subject.toLowerCase() // Exact match
        );
        return { subject, resources: relatedResources };
      });

      console.log("Resources By Subject:", resourcesBySubject);

      // Step 3: Filter and render resources
      const filteredResources = resourcesBySubject.filter(({ resources }) => resources.length > 0);

      if (filteredResources.length === 0) {
        return <p className="no-resources-message">No resources available for the selected profession.</p>;
      }

      return (
        <div>
          {filteredResources.map(({ subject, resources }) => (
            <div key={subject} className="resource-section">
              <h3>{subject}</h3>
              <ul>
                {resources.map((resource) => (
                  <li key={resource.id}>
                    <a href={resource.pdf} target="_blank" rel="noopener noreferrer">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    })()
  ) : (
    <p className="no-resources-message">No resources available for the selected profession.</p>
  )}
</div>
      

      <div className="full-analysis-section">
        <h2 className="full-analysis-section-title">Available Tutors</h2>
        {relatedUniversities.length > 0 ? (
          (() => {
            const allExamSubjects = new Set();
            relatedUniversities.forEach((university) => {
              university.faculties.forEach((faculty) => {
                if (Array.isArray(faculty.examSubjects)) {
                  faculty.examSubjects.forEach((subject) =>
                    allExamSubjects.add(subject)
                  );
                }
              });
            });

            const examSubjectsArray = Array.from(allExamSubjects);

            const filteredTutors = tutorsData.filter((tutor) =>
              tutor.subjects.some((subject) =>
                examSubjectsArray.some(
                  (examSubject) =>
                    examSubject.toLowerCase() === subject.toLowerCase()
                )
              )
            );

            if (filteredTutors.length === 0) {
              return <p>No tutors available for the selected subjects.</p>;
            }

            return (
              <div className="tutors-grid">
                {filteredTutors.map((tutor) => (
                  <div key={tutor.id} className="tutor-card">
                    <img
                      src={tutor.profilePicture}
                      alt={tutor.name}
                      className="tutor-card-image"
                    />
                    <h3 className="tutor-card-name">{tutor.name}</h3>
                    <p className="tutor-card-subjects">
                      Subjects: {tutor.subjects.join(", ")}
                    </p>
                    <p className="tutor-card-rating">Rating: {tutor.rating} ⭐</p>
                    <button
                      className="tutor-card-button"
                      onClick={() => setSelectedTutor(tutor)}
                    >
                      Contact the Tutor
                    </button>
                  </div>
                ))}
              </div>
            );
          })()
        ) : (
          <p>No tutors available for the selected profession.</p>
        )}

        {/* Popup for Tutor Details */}
        {selectedTutor && (
          <div className="tutor-popup">
            <div className="tutor-popup-content">
              <button
                className="tutor-popup-close"
                onClick={() => setSelectedTutor(null)}
              >
                ✖
              </button>
              <img
                src={selectedTutor.profilePicture}
                alt={selectedTutor.name}
                className="tutor-popup-image"
              />
              <h3>{selectedTutor.name}</h3>
              <p>
                <strong>Email:</strong> {selectedTutor.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedTutor.phoneNum}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="full-analysis-actions">
        <button className="full-analysis-btn" onClick={saveAsPDF}>
          Save as PDF
        </button>
        <button
          className="full-analysis-btn"
          onClick={() => setShowSupportPopup(true)}
        >
          Get Support
        </button>
      </div>
      {showSupportPopup && (
        <div className="support-popup">
          <div className="support-popup-content">
            <button
              className="support-popup-close"
              onClick={() => setShowSupportPopup(false)}
            >
              ✖
            </button>
            <h3>Get Support</h3>
            <form onSubmit={handleSupportSubmit} className="support-form">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={supportForm.email}
                  onChange={handleSupportInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={supportForm.name}
                  onChange={handleSupportInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={supportForm.surname}
                  onChange={handleSupportInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={supportForm.subject}
                  onChange={handleSupportInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={supportForm.description}
                  onChange={handleSupportInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="support-submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullAnalysis;