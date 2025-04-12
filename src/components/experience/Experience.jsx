import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  }

  
  const BachelorsContent = () => (
    <div>
      <h3>Bachelors in Computer Science</h3>
      <p className="subtitle-location">SRKR Engineering College (Aug 2017 - Jul 2021)</p>
      <br/>
      
      <p className="main-info">During my undergraduate studies, I focused on developing core Computer Science topics such as programming languages, data structures, algorithms, databases, cloud technologies, fundamentals of data science, IoT, cyber security, mathematics and statistics. I developed various projects that covered wide range of tech stacks during my tenure that helped me gain a hands-on knowledge with building tools of software.</p>
    </div>
  )

  
  const AnalystContent = () => (
    <div>
      <h3>DevOps Engineer</h3>
      <p className="subtitle-location">Cognizant (Aug 2021 - present)</p>
      <br/>
      
      <br/>
      <h4>Key Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Developed Python backend rest APIs using Flask framework for an internal web application.</li>
        <li>Experience in creating GitHub Action pipelines for automating the Azure infrastructure
        deployment and application build and releases.</li>
        <li>Configured and Deployed Argo CD for the deployment of microservices in an Azure
        Kubernetes cluster</li>
        <li>
        Integrated Kubernetes cluster container insights with Managed Prometheus and Grafana
for monitoring the AKS workloads.

        </li>
        <li>Experience in creating the Azure DevOps build and release pipelines for automating the
        deployment of internal web application in Azure Kubernetes Service.</li>
        <strong></strong>
      </ul>
    </div>
  )

  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Professional Work
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              
              
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div onClick={() => openModal(<BachelorsContent />)}>
                <h3 className="qualification__title">Bachelors in Computer Science</h3>
                <span className="qualification__subtitle">
                  SRKR Engineering College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2017 - Mar 2021
                </div>
              </div>
            </div>
          </div>

        

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div onClick={() => openModal(<AnalystContent />)}>
                <h3 className="qualification__title">DevOps Engineer</h3>
                <span className="qualification__subtitle">Cognizant</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2021 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>&times;</span>
            {modalContent}
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience