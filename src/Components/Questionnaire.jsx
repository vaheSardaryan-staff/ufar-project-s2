import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questionnaire.css";

const questions = [
    {
        id: 1,
        question: "What subjects do you enjoy the most?",
        options: ["Math", "Science", "Art", "History"],
      },
      {
        id: 2,
        question: "What type of work environment do you prefer?",
        options: ["Office", "Remote", "Outdoors", "Laboratory"],
      },
      {
        id: 3,
        question: "Do you enjoy working with people?",
        options: ["Yes", "No", "Sometimes"],
      },
      {
        id: 4,
        question: "What kind of tasks do you enjoy the most?",
        options: ["Problem-solving", "Creative work", "Helping others", "Managing projects"],
      },
      {
        id: 5,
        question: "Which of these skills best describes you?",
        options: ["Logical thinking", "Artistic ability", "Leadership", "Technical knowledge"],
      },
      {
        id: 6,
        question: "Do you prefer working alone or in a team?",
        options: ["Alone", "Team", "Both"],
      },
      {
        id: 7,
        question: "How important is job stability to you?",
        options: ["Very important", "Somewhat important", "Not important"],
      },
      {
        id: 8,
        question: "Would you like to work with technology?",
        options: ["Yes", "No", "Maybe"],
      },
      {
        id: 9,
        question: "Do you enjoy analyzing data and numbers?",
        options: ["Yes", "No", "Sometimes"],
      },
      {
        id: 10,
        question: "Are you interested in designing or building things?",
        options: ["Yes", "No", "A little"],
      },
      {
        id: 11,
        question: "Would you rather work indoors or outdoors?",
        options: ["Indoors", "Outdoors", "Both"],
      },
      {
        id: 12,
        question: "Do you like researching and learning new things?",
        options: ["Yes", "No", "Depends on the topic"],
      },
      {
        id: 13,
        question: "How do you prefer to learn new skills?",
        options: ["Reading and studying", "Hands-on practice", "Watching videos", "Group discussions"],
      },
      {
        id: 14,
        question: "What motivates you the most in a career?",
        options: ["High salary", "Passion for the work", "Helping others", "Job security"],
      },
      {
        id: 15,
        question: "Are you comfortable making decisions under pressure?",
        options: ["Yes", "No", "Sometimes"],
      },
];

const professions = [
    {
        id: "software-engineer",
        title: "Software Engineer",
        icon: "👨‍💻",
        description:
            "The Architects of the Digital World. Software engineers design, develop, and maintain the applications and systems that power our digital lives. They write code to build everything from websites and mobile apps to artificial intelligence and large-scale enterprise systems. With expertise in programming languages like Python, JavaScript, and C++, they solve complex problems and bring innovative solutions to life. Whether working in tech startups, major corporations, or freelancing, software engineers play a crucial role in shaping the future.",
        traits: ["Math", "Office", "Problem-solving", "Logical thinking", "Technology"],
        },
        {
        id: "data-scientist",
        title: "Data Scientist",
        icon: "📊",
        description:
            "Decoding the Language of Data. Data scientists extract valuable insights from massive datasets using statistical analysis, machine learning, and AI. Their work helps businesses optimize strategies, predict trends, and make data-driven decisions. Whether working in healthcare, finance, or marketing, data scientists turn raw numbers into powerful knowledge that drives innovation and efficiency.",
        traits: ["Math", "Science", "Analyzing data", "Logical thinking", "Technology"],
        },
        {
        id: "doctor",
        title: "Doctor (Physician)",
        icon: "🩺",
        description:
            "Healing with Knowledge, Science, and Compassion. Doctors diagnose and treat illnesses, using their expertise to improve and save lives. From general practitioners to specialized surgeons, their work spans hospitals, research labs, and clinics worldwide. Beyond treating patients, many doctors contribute to groundbreaking medical discoveries, advancing healthcare for future generations.",
        traits: ["Science", "Helping others", "Problem-solving", "Laboratory"],
        },
        {
        id: "teacher",
        title: "Teacher",
        icon: "📚",
        description:
            "Shaping Minds, Building Futures. Teachers inspire students with knowledge, curiosity, and critical thinking. Whether in elementary schools, high schools, or universities, they provide the foundation for lifelong learning and personal development. Passionate educators leave a lasting impact, helping shape the leaders, scientists, and innovators of tomorrow.",
        traits: ["History", "Helping others", "Working with people", "Leadership"],
        },
        {
        id: "mechanical-engineer",
        title: "Mechanical Engineer",
        icon: "⚙️",
        description:
            "The Innovators Behind Machines and Technology. Mechanical engineers design, build, and refine mechanical systems that power industries. From robotics and aerospace to automotive and energy solutions, they apply physics, mathematics, and creativity to solve real-world problems. Their work is essential in developing sustainable and efficient technologies.",
        traits: ["Math", "Problem-solving", "Hands-on practice", "Indoors"],
        },
        {
        id: "graphic-designer",
        title: "Graphic Designer",
        icon: "🎨",
        description:
            "Turning Ideas into Visual Masterpieces. Graphic designers use color, typography, and digital tools to create stunning visuals for branding, advertising, websites, and social media. Their creativity helps businesses communicate messages effectively, ensuring strong visual identities in a competitive market.",
        traits: ["Art", "Creative work", "Hands-on practice", "Technology"],
        },
        {
        id: "psychologist",
        title: "Psychologist",
        icon: "🧠",
        description:
            "Understanding the Human Mind and Behavior. Psychologists study thoughts, emotions, and behaviors to help individuals improve mental well-being. Whether providing therapy, conducting research, or advising organizations, they play a crucial role in addressing mental health challenges and enhancing overall quality of life.",
        traits: ["Helping others", "Working with people", "Analyzing data"],
        },
        {
        id: "marketing-specialist",
        title: "Marketing Specialist",
        icon: "📈",
        description:
            "Bridging Brands and People. Marketing specialists develop strategies to connect businesses with customers. Through digital marketing, social media, and advertising campaigns, they shape brand identity and drive engagement. Their expertise ensures businesses grow in competitive markets, using both creativity and analytics.",
        traits: ["Creative work", "Leadership", "Working with people", "Technology"],
        },
        {
        id: "lawyer",
        title: "Lawyer",
        icon: "⚖️",
        description:
            "Protecting Rights, Advocating for Justice. Lawyers provide legal advice, represent clients in court, and draft policies that uphold justice. Specializing in areas such as corporate law, criminal defense, and intellectual property, they ensure fair legal processes and protect individuals' and businesses' rights.",
        traits: ["History", "Problem-solving", "Leadership", "Analyzing data"],
        },
        {
        id: "architect",
        title: "Architect",
        icon: "🏗️",
        description:
            "Designing the Future, One Building at a Time. Architects plan and design structures that are functional, sustainable, and visually appealing. From residential homes to iconic skyscrapers, their expertise combines art and engineering to shape the environments where people live and work.",
        traits: ["Math", "Creative work", "Hands-on practice", "Indoors"],
        },
        {
        id: "nurse",
        title: "Nurse",
        icon: "💙",
        description:
            "The Lifeline of Healthcare. Nurses provide critical medical care, emotional support, and patient advocacy. Working alongside doctors, they ensure patients receive the best treatment and compassionate attention, playing a vital role in hospitals, clinics, and home care settings.",
        traits: ["Helping others", "Working with people", "Science"],
        },
        {
        id: "accountant",
        title: "Accountant",
        icon: "💰",
        description:
            "Managing Finances, Ensuring Stability. Accountants help businesses and individuals keep track of finances, optimize budgets, and comply with tax regulations. With expertise in auditing, financial planning, and risk management, they ensure economic stability and growth.",
        traits: ["Math", "Analyzing data", "Indoors"],
        },
        {
        id: "electrician",
        title: "Electrician",
        icon: "🔌",
        description:
            "Powering the Modern World. Electricians install, repair, and maintain electrical systems in homes, offices, and industrial facilities. Their work ensures safe, efficient power distribution, preventing electrical hazards and keeping essential infrastructure running.",
        traits: ["Hands-on practice", "Problem-solving", "Indoors", "Outdoors"],
        },
        {
        id: "civil-engineer",
        title: "Civil Engineer",
        icon: "🏗️",
        description:
            "Building the Cities of Tomorrow. Civil engineers design and oversee the construction of infrastructure such as roads, bridges, water systems, and buildings. Their expertise ensures that societies function smoothly and that structures are safe and sustainable.",
        traits: ["Math", "Hands-on practice", "Indoors", "Outdoors"],
        },
        {
        id: "journalist",
        title: "Journalist",
        icon: "📰",
        description:
            "Informing the World with Truth and Stories. Journalists investigate, report, and communicate news to the public through newspapers, television, radio, and online media. Their work is essential for transparency, democracy, and keeping people informed about important global and local issues.",
        traits: ["History", "Writing", "Working with people"],
        },
        {
        id: "ux-ui-designer",
        title: "UX/UI Designer",
        icon: "🎨",
        description:
            "Enhancing Digital Experiences. UX/UI designers create seamless, visually appealing interfaces for apps and websites. By combining psychology, technology, and design, they ensure that digital interactions are smooth, efficient, and user-friendly.",
        traits: ["Creative work", "Technology", "Problem-solving"],
        },
        {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        icon: "🛡️",
        description:
            "Defending the Digital World. Cybersecurity analysts protect systems and networks from cyber threats, ensuring data security and privacy. Their work is crucial in preventing hacking, fraud, and data breaches in an increasingly digital world.",
        traits: ["Math", "Technology", "Problem-solving", "Analyzing data"],
        },
];
  
const Questionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();
  
    const handleOptionSelect = (option) => {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = option;
      setAnswers(updatedAnswers);
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResults();
      }
    };
  
    const calculateResults = () => {
      const scores = professions.map((profession) => {
        const matchCount = profession.traits.filter((trait) =>
          answers.includes(trait)
        ).length;
        return { ...profession, score: matchCount };
      });
  
      const sortedResults = scores.sort((a, b) => b.score - a.score);
      navigate("/results", { state: { results: sortedResults.slice(0, 3) } });
    };
  
    return (
      <div className="questionnaire">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="question-card">
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="option-button"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Questionnaire;