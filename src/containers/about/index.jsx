import React from 'react';
import './style.scss';
import coding from '../../public/coding-photo2.jpeg'; 

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">ABOUT</h1>
      <h3 className="about__subtitle">
        Aspiring Frontend Developer <br /> B.Tech CSE Student (3rd Year) at UPES Dehradun
      </h3>

      <div className="about__content">
        <div className="about__text">
          <ul className="about__description">
            <p>Hello! I'm Chitranshi Maheshwari, a passionate and detail-oriented Computer Science Engineering student.</p>
            <li>Currently in my 3rd year at UPES, Dehradun.</li>
            <li>I have hands-on experience in frontend development.</li>
            <li>Currently interning at Codesecure Technologies.</li>
            <li>I'm building modern, responsive web interfaces.</li>
            <li>I enjoy learning new technologies.</li>
            <li>I contribute to real-world projects.</li>
            <li>I aim to make an impact through my work and social initiatives.</li>
          </ul>
        </div>

        <div className="about__image">
          <img src={coding} alt="Chitranshi Maheshwari" />
        </div>
      </div>
    </div>
  );
};

export default About;
