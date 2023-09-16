import React from "react";
import "./About.scss";
// import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import { AiFillCheckSquare, AiFillCheckCircle } from "react-icons/Ai";
import Loading from "../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Carusel1 from "../../../Components/Carusel1/Carusel1";
import { BsFillCheckSquareFill } from "react-icons/Bs";
export default function About() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <div className="aboutHeader">
            <div className="container">
              <div className="aboutTitle">
                <h2>
                  Ab<span>o</span>ut
                </h2>
              </div>
            </div>
            <div className="aboutLinks">
              <Link to="/home" className="aboutLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">About Us</Link>
            </div>
          </div>

          {/* https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/about-img1-1-1.png */}

         <div className="container">
         <div className="section-1">
            <div className="left">
              <img
                src=" https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/about-img1-1-1.png"
                alt=""
              />
            </div>
            <div className="right">
              <p className="title">About us</p>
              <h2 className="header">We are digital explorers </h2>
              <p className="description">
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
              <div className="cards-container">
              <div className="left-cards-container">
                <div className="card">
                  <BsFillCheckSquareFill  className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
                <div className="card">
                  <BsFillCheckSquareFill className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
                <div className="card">
                  <BsFillCheckSquareFill className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
              </div>
              <div className="right-cards-container">
                <div className="card">
                  <BsFillCheckSquareFill className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
                <div className="card">
                  <BsFillCheckSquareFill className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
                <div className="card">
                  <BsFillCheckSquareFill className="icon-about" />
                  <p>SEO Marketing</p>
                </div>
              </div>
            </div>
            </div>
          
          </div>
         </div>

          {/* <div className="aboutpage__bottom">
              <div className="aboutpage__bottom__left">
                <h2>Our History</h2>
                <div className="aboutline"></div>
                <p>
                  Real innovations and positive customer experience are the
                  heart of successful communication.
                </p>
                <ul>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Activate listening</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span> Brilliant minds</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Better, best, wow!</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Branding it better!</span>
                  </li>
                </ul>
              </div>
              <div className="aboutpage__bottom__middle">
                {" "}
                <h2>Our Mission</h2>
                <div className="aboutline"></div>
                <p>
                  Real innovations and positive customer experience are the
                  heart of successful communication.
                </p>
                <ul>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span> Creating results</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span> Expect more </span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Good thinking</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>In real we trust</span>
                  </li>
                </ul>
              </div>
              <div className="aboutpage__bottom__right">
                {" "}
                <h2>Who we are</h2>
                <div className="aboutline"></div>
                <p>
                  Real innovations and positive customer experience are the
                  heart of successful communication.
                </p>
                <ul>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Stay real always</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>We have you covered</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>We turn heads</span>
                  </li>
                  <li>
                    <AiFillCheckCircle className="ikonabout" />
                    <span>Your brand, promoted</span>
                  </li>
                </ul>
              </div>
            </div> */}

          <div className="container">
            <section className="section-2">
             <div className="card">
              
             </div>
            </section>
          </div>

          {/* <div className="about__team">
            <div className="about__team__content">
              <span>Our Team</span>
              <h2>Meet our awesome team member</h2>
            </div>
            <div className="about__team__cards">
              <div className="about__team__cards__card">
                <div className="about__team__cards__card__img">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/team1-1-1.jpg"></img>
                </div>
                <div className="about__team__cards__card__content">
                  <h3> Jhons Smith</h3>
                  <span>Web Developers</span>
                </div>
              </div>
              <div className="about__team__cards__card">
                <div className="about__team__cards__card__img">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/team4-1-1.jpg"></img>
                </div>
                <div className="about__team__cards__card__content">
                  <h3> Jhons Smith</h3>
                  <span>Web Developers</span>
                </div>
              </div>
              <div className="about__team__cards__card">
                <div className="about__team__cards__card__img">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/team3-1-1.jpg"></img>
                </div>
                <div className="about__team__cards__card__content">
                  <h3> Jhons Smith</h3>
                  <span>Web Developers</span>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      )}
    </>
  );
}
