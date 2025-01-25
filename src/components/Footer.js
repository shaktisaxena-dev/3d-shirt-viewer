import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div>
                <h3>Contact Us</h3>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i>Team StyleAI</li>
                    <li><i className="fas fa-phone-alt"></i>+91 1234567890</li>
                    <li><i className="fas fa-envelope"></i>demo@teamstyleai.com</li>
                </ul>
            </div>
            <div>
                <h3>Newsletter</h3>
                <form>
                    <input placeholder="Enter your email" type="email" />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
    </footer>
);

export default Footer;
