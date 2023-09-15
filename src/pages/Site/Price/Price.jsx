import React, { useState } from "react";
import { useEffect } from "react";
import "./Price.scss";
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/Bi";
// import { BsCheckCircle } from "react-icons/Bs";
import { BsFillPatchCheckFill } from "react-icons/Bs";

export default function Price() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="prices">
          <div className="price_heading">
            <h2>Price</h2>
            <div className="lines"></div>
            <ul>
              <li>
                <Link className="home" to="/">
                  Home
                </Link>
              </li>
              <BiChevronRight className="iconss" />
              <li>
                <Link className="contact" to="/price">
                  Price
                </Link>
              </li>
            </ul>
          </div>
          <div className="prices__menu">
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Veb Dizayn Xidməti
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Qrafik Dizayn Xidməti
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Rəqəmsal Marketing
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              Media Xidmətləri
            </button>
          </div>
          <div className="prices__cards">
            <div className="prices__card__width">
              <div className="prices__card">
                <h3>Daily plan</h3>
                <hr />
                <div className="prices__price">
                  <span>$</span>
                  <h4>120</h4>
                  <p>/Day</p>
                </div>
                <hr />
                <div className="prices__card__text">
                  <ul>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                  </ul>
                </div>
                <div className="prices-button-wrapper">
                  <button>Select the plan</button>
                </div>
              </div>
            </div>
            <div className="prices__card__width">
              <div className="prices__card">
                <h3>Daily plan</h3>
                <hr />
                <div className="prices__price">
                  <span>$</span>
                  <h4>120</h4>
                  <p>/Day</p>
                </div>
                <hr />
                <div className="prices__card__text">
                  <ul>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                  </ul>
                </div>
                <div className="prices-button-wrapper">
                  <button>Select the plan</button>
                </div>
              </div>
            </div>
            <div className="prices__card__width">
              <div className="prices__card">
                <h3>Daily plan</h3>
                <hr />
                <div className="prices__price">
                  <span>$</span>
                  <h4>120</h4>
                  <p>/Day</p>
                </div>
                <hr />
                <div className="prices__card__text">
                  <ul>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                    <li>
                      <BsFillPatchCheckFill className="ikon" />{" "}
                      <p>Web design</p>
                    </li>
                  </ul>
                </div>
                <div className="prices-button-wrapper">
                  <button>Select the plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
