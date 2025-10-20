import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsTiktok,
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
} from 'react-icons/bs'

const Footer = () => (
  <footer className="footer-section text-white pt-5">
    <Container>
      <Row className="gy-4">
        {/* Brand Section */}
        <Col md={4}>
          <h3 className="fw-bold mb-3">Coffee Shop</h3>
          <p className="text-light opacity-75">
            Brewing happiness in every cup.  
            Discover the perfect blend of flavor, aroma, and warmth crafted just for you.
          </p>
          <div className="d-flex gap-3 mt-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link"><BsFacebook /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-link"><BsTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link"><BsInstagram /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="social-link"><BsTiktok /></a>
          </div>
        </Col>

        {/* Links Section */}
        <Col md={4}>
          <Row>
            <Col xs={6}>
              <h5 className="footer-heading mb-3">Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Product</a></li>
                <li><a href="#" className="footer-link">Help & Support</a></li>
                <li><a href="#" className="footer-link">Return Policy</a></li>
                <li><a href="#" className="footer-link">Terms Of Use</a></li>
              </ul>
            </Col>
            <Col xs={6}>
              <h5 className="footer-heading mb-3">Explore</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Features</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Our Branches</a></li>
              </ul>
            </Col>
          </Row>
        </Col>

        {/* Contact Section */}
        <Col md={4}>
          <h5 className="footer-heading mb-3">Contact Us</h5>
          <p className="mb-2"><BsGeoAlt className="me-2 icon-color" /> Egypt, Cairo</p>
          <p className="mb-2"><BsTelephone className="me-2 icon-color" /> Customer Service: 01021115665 - 01114151160</p>
          <p className="mb-2"><BsTelephone className="me-2 icon-color" /> Sales: 01147879789 - 01009052817</p>
          <p><BsEnvelope className="me-2 icon-color" /> info@coffeeshop.com</p>
        </Col>
      </Row>
    </Container>

    {/* Copyright Section */}
    <div className="text-center mt-5 py-3 copyright-bar">
      <small>© Hagar Hatem All Rights Reserved</small>
    </div>

    <style jsx>{`
      .footer-section {
        background: linear-gradient(180deg, #2a2a28 0%, #181716 100%);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        letter-spacing: 0.3px;
      }

      .footer-heading {
        color: #bfa37a;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .footer-link {
        color: #cfcfcf;
        text-decoration: none;
        display: block;
        margin-bottom: 8px;
        transition: all 0.3s ease;
      }

      .footer-link:hover {
        color: #bfa37a;
        transform: translateX(6px);
      }

      .social-link {
        color: #cfcfcf;
        font-size: 1.3rem;
        transition: all 0.3s ease;
      }

      .social-link:hover {
        color: #bfa37a;
        transform: scale(1.15);
      }

      .icon-color {
        color: #bfa37a;
      }

      .copyright-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        background-color: #1b1a18;
        color: #dcdcdc;
        font-size: 0.9rem;
      }

      h3, h5 {
        font-family: 'Poppins', sans-serif;
      }

      p, a {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.95rem;
      }
    `}</style>
  </footer>
)

export default Footer

