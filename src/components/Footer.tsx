import React from 'react';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="payment-methods">
        <img src="/assets/Visa.png" alt="Visa" className="payment-icon" />
        <img src="/assets/MasterCard.png" alt="MasterCard" className="payment-icon" />
        <img src="/assets/AmericanExpress.png" alt="American Express" className="payment-icon" />
        <img src="/assets/Skrill.png" alt="Skrill" className="payment-icon" />
        <img src="/assets/Cripto.png" alt="Cripto" className="payment-icon" />
        <span className="more-text">and 50+ more</span>
      </div>

      <div className="container">
        <div className="social-links">
          <a href="#" className="social-link">
            <img src="/assets/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/discord.png" alt="Discord" className="social-icon" />
          </a>
        </div>          
      </div>

      <div className="footer-bottom">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/assets/ChicksGold.png" alt="Chicks Gold" className="chicks-image" />
            <p className="footer-text">support@chicksgold.com</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">About Us</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Games</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Sitemap</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Copyright Policy</a></li>
            </ul>
            <div className="trustpilot-section">
              <img src="/assets/starsTrust.png" alt="Stars Trust" className="stars-trust-icon" />
              <p className="trustpilot-text">Trustpilot Reviews</p>
            </div>
          </div>
        </div>

        <div className="footer-copyrigth">
          <p className="copyright-text">© 2017 - 2024 Chicksgold.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;