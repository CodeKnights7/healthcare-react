import React from "react";
import "../footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="intro">
        <h4>HEALTH CARE</h4>
        <p>Health is Welth</p>
      </div>

      <div className="row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">our duty</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">afficilate programs</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">applying method</a>
            </li>
            <li>
              <a href="#">eligibility</a>
            </li>
            <li>
              <a href="#">process of selection</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
