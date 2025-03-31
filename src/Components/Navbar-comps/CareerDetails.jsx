import React from "react";
import { useParams } from "react-router-dom";
import "./CareerDetails.css";

const CareerDetails = () => {
  const { profession } = useParams();

  const careerDetails = {
    "software-engineer": {
      "title": "Software Engineer",
      "icon": "👨‍💻",
      "description": "The Architects of the Digital World. Software engineers design, develop, and maintain the applications and systems that power our digital lives. They write code to build everything from websites and mobile apps to artificial intelligence and large-scale enterprise systems. With expertise in programming languages like Python, JavaScript, and C++, they solve complex problems and bring innovative solutions to life. Whether working in tech startups, major corporations, or freelancing, software engineers play a crucial role in shaping the future."
    },
    "data-scientist": {
      "title": "Data Scientist",
      "icon": "📊",
      "description": "Decoding the Language of Data. Data scientists extract valuable insights from massive datasets using statistical analysis, machine learning, and AI. Their work helps businesses optimize strategies, predict trends, and make data-driven decisions. Whether working in healthcare, finance, or marketing, data scientists turn raw numbers into powerful knowledge that drives innovation and efficiency."
    },
    "doctor": {
      "title": "Doctor (Physician)",
      "icon": "🩺",
      "description": "Healing with Knowledge, Science, and Compassion. Doctors diagnose and treat illnesses, using their expertise to improve and save lives. From general practitioners to specialized surgeons, their work spans hospitals, research labs, and clinics worldwide. Beyond treating patients, many doctors contribute to groundbreaking medical discoveries, advancing healthcare for future generations."
    },
    "teacher": {
      "title": "Teacher",
      "icon": "📚",
      "description": "Shaping Minds, Building Futures. Teachers inspire students with knowledge, curiosity, and critical thinking. Whether in elementary schools, high schools, or universities, they provide the foundation for lifelong learning and personal development. Passionate educators leave a lasting impact, helping shape the leaders, scientists, and innovators of tomorrow."
    },
    "mechanical-engineer": {
      "title": "Mechanical Engineer",
      "icon": "⚙️",
      "description": "The Innovators Behind Machines and Technology. Mechanical engineers design, build, and refine mechanical systems that power industries. From robotics and aerospace to automotive and energy solutions, they apply physics, mathematics, and creativity to solve real-world problems. Their work is essential in developing sustainable and efficient technologies."
    },
    "graphic-designer": {
      "title": "Graphic Designer",
      "icon": "🎨",
      "description": "Turning Ideas into Visual Masterpieces. Graphic designers use color, typography, and digital tools to create stunning visuals for branding, advertising, websites, and social media. Their creativity helps businesses communicate messages effectively, ensuring strong visual identities in a competitive market."
    },
    "psychologist": {
      "title": "Psychologist",
      "icon": "🧠",
      "description": "Understanding the Human Mind and Behavior. Psychologists study thoughts, emotions, and behaviors to help individuals improve mental well-being. Whether providing therapy, conducting research, or advising organizations, they play a crucial role in addressing mental health challenges and enhancing overall quality of life."
    },
    "marketing-specialist": {
      "title": "Marketing Specialist",
      "icon": "📈",
      "description": "Bridging Brands and People. Marketing specialists develop strategies to connect businesses with customers. Through digital marketing, social media, and advertising campaigns, they shape brand identity and drive engagement. Their expertise ensures businesses grow in competitive markets, using both creativity and analytics."
    },
    "lawyer": {
      "title": "Lawyer",
      "icon": "⚖️",
      "description": "Protecting Rights, Advocating for Justice. Lawyers provide legal advice, represent clients in court, and draft policies that uphold justice. Specializing in areas such as corporate law, criminal defense, and intellectual property, they ensure fair legal processes and protect individuals' and businesses' rights."
    },
    "architect": {
      "title": "Architect",
      "icon": "🏗️",
      "description": "Designing the Future, One Building at a Time. Architects plan and design structures that are functional, sustainable, and visually appealing. From residential homes to iconic skyscrapers, their expertise combines art and engineering to shape the environments where people live and work."
    },
    "nurse": {
      "title": "Nurse",
      "icon": "💙",
      "description": "The Lifeline of Healthcare. Nurses provide critical medical care, emotional support, and patient advocacy. Working alongside doctors, they ensure patients receive the best treatment and compassionate attention, playing a vital role in hospitals, clinics, and home care settings."
    },
    "accountant": {
      "title": "Accountant",
      "icon": "💰",
      "description": "Managing Finances, Ensuring Stability. Accountants help businesses and individuals keep track of finances, optimize budgets, and comply with tax regulations. With expertise in auditing, financial planning, and risk management, they ensure economic stability and growth."
    },
    "electrician": {
      "title": "Electrician",
      "icon": "🔌",
      "description": "Powering the Modern World. Electricians install, repair, and maintain electrical systems in homes, offices, and industrial facilities. Their work ensures safe, efficient power distribution, preventing electrical hazards and keeping essential infrastructure running."
    },
    "civil-engineer": {
      "title": "Civil Engineer",
      "icon": "🏗️",
      "description": "Building the Cities of Tomorrow. Civil engineers design and oversee the construction of infrastructure such as roads, bridges, water systems, and buildings. Their expertise ensures that societies function smoothly and that structures are safe and sustainable."
    },
    "journalist": {
      "title": "Journalist",
      "icon": "📰",
      "description": "Informing the World with Truth and Stories. Journalists investigate, report, and communicate news to the public through newspapers, television, radio, and online media. Their work is essential for transparency, democracy, and keeping people informed about important global and local issues."
    },
    "ux-ui-designer": {
      "title": "UX/UI Designer",
      "icon": "🎨",
      "description": "Enhancing Digital Experiences. UX/UI designers create seamless, visually appealing interfaces for apps and websites. By combining psychology, technology, and design, they ensure that digital interactions are smooth, efficient, and user-friendly."
    },
    "cybersecurity-analyst": {
      "title": "Cybersecurity Analyst",
      "icon": "🛡️",
      "description": "Defending the Digital World. Cybersecurity analysts protect systems and networks from cyber threats, ensuring data security and privacy. Their work is crucial in preventing hacking, fraud, and data breaches in an increasingly digital world."
    },
    "biologist": {
      "title": "Biologist",
      "icon": "🌱",
      "description": "Exploring Life on Earth. Biologists study living organisms, ecosystems, and genetic structures to improve medicine, agriculture, and conservation efforts. Their research is vital in addressing global challenges such as climate change and disease prevention."
    },
    "financial-analyst": {
      "title": "Financial Analyst",
      "icon": "📉",
      "description": "Navigating the Economy for Smarter Investments. Financial analysts assess market trends, company performance, and economic conditions to advise businesses and investors. Their insights help organizations make informed financial decisions and manage risks effectively."
    },
    "social-worker": {
      "title": "Social Worker",
      "icon": "🤝",
      "description": "Improving Lives, One Person at a Time. Social workers help individuals and families overcome challenges such as poverty, abuse, and mental health struggles. They work in schools, hospitals, and social service agencies, advocating for vulnerable populations and providing essential support."
    },     
  };

  const career = careerDetails[profession];

  if (!career) {
    return (
      <div className="career-details-page">
        <h1 className="career-not-found">Career Not Found</h1>
      </div>
    );
  }

  return (
    <div className="career-details-page">
      {}
      <header className="career-header">
        <div className="career-icon">{career.icon}</div>
        <div className="career-header-content">
          <h1 className="career-header-title">{career.title}</h1>
        </div>
      </header>

      {}
      <div className="career-divider"></div>

      {}
      <section className="career-details">
        <h2 className="career-details-title">About the Career</h2>
        <p className="career-details-description">{career.description}</p>
      </section>

      {}
      <section className="related-items">
        <div className="related-item">
          <img src="/path/to/related-job.png" alt="Related Faculty" />
          <h3 className="related-item-title">facultyName</h3>
          <p className="related-item-meta">universityName</p>
        </div>
        <div className="related-item">
          <img src="/path/to/related-training.png" alt="tutorName" />
          <h3 className="related-item-title">nameSurname</h3>
          <p className="related-item-meta">entrepriseName</p>
        </div>
      </section>
    </div>
  );
};

export default CareerDetails;