import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './style.scss';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlvsfxa",       
        "template_bo67nv2",     
        formRef.current,
        "1pDEY-P_cDktkCGdO"      
      )
      .then(() => {
        formRef.current.reset(); 
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>

      <form ref={formRef} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="user_phone" placeholder="Your Phone" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="button" onClick={sendEmail}>Send</button>
      </form>

      <div className="contact-info-box">
        <p><strong>Email:</strong> chitranshimaheshwari02@gmail.com</p>
        <p><strong>Location:</strong> Gwalior, India</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/chitranshi-maheshwari" target="_blank" rel="noreferrer">linkedin.com/in/chitranshi-maheshwari</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/chitranshimaheswari02" target="_blank" rel="noreferrer">github.com/chitranshimaheswari02</a></p>
      </div>
    </div>
  );
};

export default Contact;
