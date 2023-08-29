import React from "react";
import "./Footer.scss";
import newlogo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/Bi";
import { SlSocialStumbleupon } from "react-icons/Sl";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__top__one">
            <div className="line1"></div>
            <div className="footer__image">
              <img src={newlogo} alt="Responsive Image" />
            </div>
            <h3>ABOUT THE BLOG</h3>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do
              eiusmod mas.cteturss pisicing elityt, sedt do section mas.
            </p>
          </div>
          <div className="footer__top__two">
            <h3>CONTACT INFO</h3>
            <ul>
              <li>
                <FaPhoneVolume className="phone" />
                <Link to="/contact">
                  <p>+088 130 629 8615</p>
                </Link>
              </li>
              <li>
                <BiLogoGmail className="phone" />
                <Link to="/contact">
                  <p>hello@varn.com</p>
                </Link>
              </li>
              <li>
                <SlSocialStumbleupon className="phone" />
                <Link to="/contact">
                  <p>Social Network</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__top__three">
            <h3>QUICK LINKS</h3>
            <div class="card">
              <ul>
                <li>
                  {" "}
                  <Link to="">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/service">Services</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/faq">FAQ</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/about">About</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/blogs">Blogs</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="">Team</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/projects">Projects</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="">Partner</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/price">Price</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/blogs">Services</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="line"></div>
          <div className="footer__bottom__content">
            <span>© 2023 Bütün hüquqlar qorunur</span>
            <span>Neyman Enterprise Technologies</span>
          </div>
        </div>
      </div>
    </>
  );
}
