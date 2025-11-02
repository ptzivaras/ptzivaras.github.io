import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="3+ years Work Expierience in Full Stack Development"
        body={
          <div className="works-body">
            <div className="work">
              <FontAwesomeIcon icon={faBriefcase} className="work-icon" />
              <div className="work-title">Natech Banking Solutions</div>
              <div className="work-subtitle">Full-stack Developer</div>
              <div className="work-duration">Mar 2025 – Sep 2025</div>
            </div>

            <div className="work">
              <FontAwesomeIcon icon={faBriefcase} className="work-icon" />
              <div className="work-title">Freelance</div>
              <div className="work-subtitle">React Developer </div>
              <div className="work-duration">Jun 2024 – Dec 2024</div>
            </div>

            <div className="work">
              <FontAwesomeIcon icon={faBriefcase} className="work-icon" />
              <div className="work-title">Future Generation (NGO)</div>
              <div className="work-subtitle"> Software Developer</div>
              <div className="work-duration">Jun 2024 – Dec 2024</div>
            </div>

            <div className="work">
              <FontAwesomeIcon icon={faBriefcase} className="work-icon" />
              <div className="work-title">PD Neurotechnology Ltd.</div>
              <div className="work-subtitle">Software Engineer</div>
              <div className="work-duration">Jan 2022 – Jun 2024</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
