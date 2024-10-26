import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      
          <div className="social-links">
            <a href="#" className="social-link"><Facebook className="social-icon" /></a>
            <a href="#" className="social-link"><Instagram className="social-icon" /></a>
            <a href="#" className="social-link"><Twitter className="social-icon" /></a>
            <a href="#" className="social-link"><MessageCircle className="social-icon" /></a>
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