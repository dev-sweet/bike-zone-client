import React from 'react';
import logo from '../../images/logo.png';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import payment from '../../images/footer-img.png';
import './Footer.css';
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="footer-content">
                <img className="footer-logo" src={logo} alt="" />
                <p>Calista Wise 7292 Dictum Av. Antonio, Italy.</p>
                <p>(+880)1727724844</p>
                <Link className="footer-mail" to="mailto:contact@company.com">
                  sweetali0520@gmail.com
                </Link>
                <div className="footer-icons">
                  <span>
                    <Link
                      className="facebook"
                      target="_blank"
                      to="/https://www.facebook.com/abdullah.sweet.13/"
                    >
                      <ImFacebook />
                    </Link>
                  </span>
                  <span>
                    <Link className="twitter" target="_blank" to="/">
                      <AiOutlineTwitter />
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="insta"
                      target="_blank"
                      to="https://www.instagram.com/sweet_4420/"
                    >
                      <FiInstagram />
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="linkedin"
                      target="_blank"
                      to="https://www.linkedin.com/in/sweet-ali/"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-content">
                <h4 className="footer-title">Useful links</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Delivery Information</Link>
                  </li>
                  <li>
                    <Link to="/">Terms &amp; Condition</Link>
                  </li>
                  <li>
                    <Link to="/">Customer Service</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Search Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-content">
                <h4 className="footer-titile">Get in touch</h4>
                <div className="get-in-touch">
                  <div className="touch-item">
                    <span>Whatsapp</span>
                    <span>+001 2233 456 291</span>
                  </div>
                  <div className="touch-item">
                    <span>Real Live Support</span>
                    <span>Calista Antonio, Italy</span>
                  </div>
                  <div className="touch-item">
                    <span>Monday - Friday</span>
                    <span>08:00 - 20:00</span>
                  </div>
                  <div className="touch-item">
                    <span>Saturday</span>
                    <span>09:00 - 21:00</span>
                  </div>
                  <div className="touch-item">
                    <span>Sunday</span>
                    <span>13:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content">
                <h4 className="footer-title">Newsletter signup</h4>
                <p className="mx-0 py-3">
                  Subscribe to our newsletters now and stay up-to-date with new
                  collections.
                </p>
                <div className="subscribe">
                  <input type="email" placeholder="Your email address" />
                  <button>Subscribe</button>
                </div>
                <img className="mt-3" src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="d-block d-md-flex justify-content-between align-items-center">
            <p className="footer-bottom-links m-0 text-center text-md-start">
              Developed by
              <Link
                className="ms-2"
                style={{ color: '#000', fontWeight: '700' }}
                to="https://www.linkedin.com/in/sweet-ali/"
              >
                Sweet
              </Link>
            </p>
            <div className="footer-bottom-links text-center text-md-start">
              <Link to="/">Accessibility</Link>
              <Link to="/">About us</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
