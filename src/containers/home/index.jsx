import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import myPhoto from "../../public/my-photo.jpeg";
import coding from "../../public/coding-photo.jpeg"
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="home__intro">
        <img src={myPhoto} alt="Loading..." className="home__image" />
        
        <h1 className="home__name">
          Hello, I'm Chitranshi Maheshwari <br /> Frontend Developer
        </h1>

        <div className="home__socials">
          <a
            href="https://www.linkedin.com/in/chitranshi-maheshwari-28a334322"
            target="_blank"
            rel="noopener noreferrer"
            className="home__icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/__.chitranshi.maheshwarii.__/profilecard/?igsh=MXY5amFrMXR3eXo0NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="home__icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/chitranshimaheshwari02"
            target="_blank"
            rel="noopener noreferrer"
            className="home__icon"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <section className="home__skills">
        <h2 className="home__skills-heading">My Skills</h2>
<div className="home__skills-icons">
  <div className="skill-item">
    <div className="card html"><FaHtml5 className="home__skill-icon" /></div>
    <p className="skill-label">HTML</p>
  </div>
  <div className="skill-item">
    <div className="card css"><FaCss3Alt className="home__skill-icon" /></div>
    <p className="skill-label">CSS</p>
  </div>
  <div className="skill-item">
    <div className="card js"><FaJs className="home__skill-icon" /></div>
    <p className="skill-label">Javascript</p>
  </div>
  <div className="skill-item">
    <div className="card react"><FaReact className="home__skill-icon" /></div>
    <p className="skill-label">React.js</p>
  </div>
  <div className="skill-item">
    <div className="card github"><FaGithub className="home__skill-icon" /></div>
    <p className="skill-label">git</p>
  </div>
</div>


      </section>

      <div className="home__about-visual">
        <div className="home__about-image">
          <img src={coding} alt="About Visual" />
        </div>
        <div className="home__about-text">
          <p>
            I craft modern, responsive, and user-friendly web interfaces. <br />
            Currently a 3rd-year B.Tech CSE student at UPES Dehradun, <br />
            Interning at Codesecure Technologies as a Frontend Developer. <br />
            Always eager to explore new technologies and grow as a developer.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
