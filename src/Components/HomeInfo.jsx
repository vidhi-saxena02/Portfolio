import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold ">Vidhi Saxena</span>, a dedicated
      software developer.
      <br />
      Join me as I transform ideas into powerful digital experiences.
      <br />
      Welcome to my coding journey!"
    </h1>
  ),
  2: (
    <InfoBox
      text="Journeyed alongside diverse companies, acquiring a rich tapestry of skills along the way."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Take a peek into my coding endeavors, uncover more about my tech journey. Ready to explore?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Got a project in mind or looking for a skilled collaborator? Let's chat! I'm just a message away."
      link="/contact"
      btnText="Let's talk!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
