import React, { useEffect, useState } from "react";
import "./Project.scss";
import Loading from "../../../Components/Loading/Loading";
// import { BiChevronRight } from "react-icons/Bi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseFetch from "../../../UseFetch";
// import LatestWorkCardInHome from "../../../Components/Home/LatestWorkCardInHome/LatestWorkCardInHome";

export default function Project() {
  const apiUrl = import.meta.env.VITE_API_URL;
  // const { data: latestWorkCardInHome } = UseFetch(`${apiUrl}latestWorkCardInHome`);
  // const {data:latestWorkCardInHome} = UseFetch(`${apiUrl}service_api/last_works/`)

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
        <div className="projects">
          {/*   HEADER LINK START  */}
          <div className="projectHeaderLink">
            <div className="container">
              <div className="projectTitle">
                <h2>
                  Pro<span>je</span>cts
                </h2>
              </div>
            </div>
            <div className="projectLinks">
              <Link to="/home" className="projectLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">Projects</Link>
            </div>
          </div>
          {/*  HEADER LINK END  */}
          {/*  HEADER START */}
          <div className="projectHeader">
            <h2 className="projectTitle">Our latest works</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          {/*  CARDS CONTAINER START */}

          <div className="container">
            <div className="project-cards-container">
              {latestWorkCardInHome && (
                <LatestWorkCardInHome
                  latestWorkCardInHome={latestWorkCardInHome}
                />
              )}
            </div>
          </div>

          {/*  HEADER END */}
        </div>
      )}
    </>
  );
}
