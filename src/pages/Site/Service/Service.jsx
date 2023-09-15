import React, { useEffect, useState } from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/Bs";
import { BiChevronRight } from "react-icons/Bi";
import firstSectionImg from "../../../images/about-img1-1-1.png";
import secondSectionImg from "../../../images/why-choose-img1-1-1.png";
import Loading from "../../../Components/Loading/Loading";

export default function Service() {
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
        <div className="service">
          <div className="service_heading">
            <h2>Services</h2>
            <div className="lines"></div>
            <ul>
              <li>
                <Link className="home" to="/">
                  Home
                </Link>
              </li>
              <BiChevronRight className="iconss" />
              <li>
                <Link className="contact" to="/service">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="service_first_section">
            <div className="service_first_section_content">
              <h5>DIGITAL MARKETING</h5>
              <h3>Creative solutions, creative results</h3>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
              <div className="service_first_section_content_list">
                <div className="service_first_section_content_list_item">
                  <BsCheckLg className="service_check_icon" />{" "}
                  <p>Core Development</p>
                </div>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
              <div className="service_first_section_content_list">
                <div className="service_first_section_content_list_item">
                  <BsCheckLg className="service_check_icon" />{" "}
                  <p>Core Development</p>
                </div>
                <p>
                  {" "}
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
            </div>
            <div className="service_first_section_img">
              <img src={firstSectionImg} />
            </div>
          </div>
          <div className="service_first_section">
            <div className="service_first_section_img">
              <img src={secondSectionImg} />
            </div>
            <div className="service_first_section_content">
              <h5>DIGITAL MARKETING</h5>
              <h3>Creative solutions, creative results</h3>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
              <div className="service_first_section_content_list">
                <div className="service_first_section_content_list_item">
                  <BsCheckLg className="service_check_icon" />{" "}
                  <p>Core Development</p>
                </div>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
              <div className="service_first_section_content_list">
                <div className="service_first_section_content_list_item">
                  <BsCheckLg className="service_check_icon" />{" "}
                  <p>Core Development</p>
                </div>
                <p>
                  {" "}
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
