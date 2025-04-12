import React, { useState } from "react";
import img1 from "../../assets/project1.jpg";
import img2 from "../../assets/project2.jpg";
import img3 from "../../assets/project3.jpg";
import img5 from "../../assets/project5.jpg";

import "./projects.css";


const projects = [
  {
    id: 1,
    image: img1,
    title: 'Recurrent Breast Cancer Detection',
    description: 'This is a detailed description of Project One.',
    tools: ['Python', 'HTML', 'Flask', 'MongoDB'],
    highlights: [
      'Built a predictor that takes in a patient’s medical history and predicts if there is a chance for the recurrence of the cancer. This was achieved by combining the results of three ensembling methods by a soft voting classifier.',
      'Gained extensive experience in Python, HTML, Flask, MongoDB while working in the classifier project. Acquired exposure on various types of datasets and Machine Learning models that suit them.',
      'The predictor yielded a 90% accuracy and 88% specificity and also an interactive UI was developed using web development tools that takes in the required data and gives out the results.'
    ],
    github: 'https://github.com/eswartatipaka/recurrent-breast-cancer-detection',
  },
  {
    id: 2,
    image: img2,
    title: 'Insurance Premium Prediction',
    description: 'This is a detailed description of Project Two.',
    tools: ['Big Data Techniques', 'Machine Learning', 'Python'],
    highlights: [
      'Developed a comprehensive insurance premium pricing forecast system using Big Data Techniques, machine learning, Python and MySQL. Integrated MongoDB, Express.js, React.js, and Node.js to create an interactive web UI for the system.',
      'Utilized historical premium prices and disbursed amounts to predict future premiums, enhancing financial decision-making for users.'
    ],
    github: 'https://github.com/eswartatipaka/insurance-premium-prediction',
  },
  {
    id: 3,
    image: img3,
    title: 'Used Cars Price Prediction',
    description: 'This is a detailed description of Project Two.',
    tools: ['Python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'plotly', 'sklearn', 'XGBoost'],
    highlights: [
      'The project addresses the challenge of determining the current market value of a used car based on its specifications. A machine learning model is built using a dataset of 426k car listings to predict the car’s price, helping sellers and buyers make informed decisions.',
      'The dataset contains 25 attributes, but not all are relevant for price prediction. Extensive data cleaning and feature selection were performed to improve model training and reduce the complexity of handling numerous unique values in the dataset.',
      'Several machine learning models, including XGBoost, are applied after the data is prepared. The project uses Python libraries like pandas, numpy, matplotlib, seaborn, sklearn, and xgboost to preprocess the data, analyze it, and build predictive models for the car prices.'
    ],
    github: 'https://github.com/eswartatipaka/used-car-price-prediction',
  },
  {
    id: 4,
    image: img5,
    title: 'Cellular Coverage Mapper',
    description: 'This is a detailed description of Project Two.',
    tools: ['Scala', 'Pyspark', 'Python', 'Java', 'BEAST(UCR)', 'Pandas'],
    highlights: [
      'Developed a spatial data project involving two polygonal datasets: one detailing city properties in the US and another containing signal strengths of various mobile networks using Scala, Pyspark, Python, Java, BEAST(UCR), Pandas.',
      'Employed spatial intersection techniques to map properties to available mobile networks with signal strength data.',
      'Visualized results using QGIS , demonstrating the complex process of intersecting polygons from disparate datasets.'
    ],
    github: 'https://github.com/eswartatipaka/carrier-strength-mapper',
  }
];

const ProjectTile = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="project-tile">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project__title">{project.title}</h3>
      <div className="project-footer">
        <span className="view-more" onClick={openModal}>View More</span>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-code">View Code</a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>&times;</span>
            <h2>{project.title}</h2>
            <br/>
            <h4 className="subsubtitle">Technologies & Tools</h4>
            <p className="tools">{project.tools.join(', ')}</p>
            <br/>
            <h4 className="subsubtitle">Key Highlights:</h4>
            <ul className="custom-bullets">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
  );
};

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <div className="project__container container grid">

      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </div>
    </section>
  );
};



export default Projects