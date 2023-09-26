import React, { useEffect, useState } from "react";
import "./Project.scss";
import Loading from "../../../Components/Loading/Loading";
// import { BiChevronRight } from "react-icons/Bi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Project() {
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
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image"  src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work1-1.jpg"/>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image" src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work4-1.jpg"></img>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image" src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work1-1.jpg"></img>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image" src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work1-1.jpg"></img>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image" src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work5-1.jpg"></img>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="project-cards-container__card">
                  <img className="project-cards-container__image" src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work1-1.jpg"></img>
                  <div className="project-cards-container__info">
                    <p className="project-cards-container__heading">Development</p>
                    <p className="project-cards-container__description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
              </div>
             </div>
           
          {/*  HEADER END */}
        </div>
      )}
    </>
  );
}
