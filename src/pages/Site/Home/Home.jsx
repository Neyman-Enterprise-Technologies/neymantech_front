import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import MySlider from "../../../Components/MySlider/MySlider";
import Loading from "../../../Components/Loading/Loading";
import {
  animateScroll as scroll,
  Element as ScrollElement,
} from "react-scroll";
import { TbMessages } from "react-icons/Tb";
import { BiSolidBadgeCheck } from "react-icons/Bi";
import { CgScrollV } from "react-icons/Cg";
import { AiOutlineGlobal } from "react-icons/Ai";
import { BsFillPatchCheckFill, BsDisplay } from "react-icons/Bs";
import Carusel from "../../../Components/Carusel/Carusel";
import ServiceCards from "../../../Components/ServiceCards/ServiceCards";
import UseFetch from "../../../UseFetch";
export default function Home() {
  const { data: serviceCards, error } = UseFetch(
    "http://localhost:8000/serviceCards"
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };
  const [showIcon, setShowIcon] = useState(false);
  const handleIconClick = () => {
    setShowIcon(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <div className="scroll-to-top" onClick={handleScrollToTop}>
            <CgScrollV />
          </div>
          <MySlider />

          <div className="home__service">
            <div className="container">
              <div className="home__service__content">
                <h2 id="services" className="services" name="services">
                  {" "}
                  Our Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              {/* SERVICE CARDS START */}
              {serviceCards && <ServiceCards servicecards={serviceCards} />}
              {error && <div>{error}</div>}
              {/*  */}

              {/* <div className="home__service__cards">
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <TbMessages className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>IT Consultancy</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <AiOutlineGlobal className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>Web Development</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <BsDisplay className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>Digital Marketing</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <AiOutlineGlobal className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>App Development</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <AiOutlineGlobal className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>eCommerce Development</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
                <Link to={"/service"}>
                  <div className="home__service__cards__card">
                    <div className="home__service__cards__card__icon">
                      <AiOutlineGlobal className="icon1" />
                      <BiSolidBadgeCheck className="badge" />
                    </div>
                    <h3>IT Solutions</h3>
                    <p>
                      &nbsp; Sed ut perspiciatis unde omnis iste<br></br> natus
                      error sit voluptatem accusantium &nbsp; doloremque
                      laudantium
                    </p>
                  </div>
                </Link>
              </div> */}
              {/* SERVICE CARDS END */}
            </div>
          </div>

          {/* <div class="home__top">
            <div class="home__top__cards">
              <div class="card ">
                <div className="dg-market">
                  <h2>Digital Marketing</h2>
                  <p>
                    We believe brand interaction is key to communication. Real
                    innovations<br></br> and positive customer experience are
                    the heart of success.
                  </p>
                </div>
                <ul>
                  <li>
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>SEO Marketing</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Facebook Marketing</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Social Marketing</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Email Marketing</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Data Marketing</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Youtube Marketing</span>
                  </li>
                </ul>
                <Link to="/" className="button-href">
                {" "}
                <button>Read More</button>
              </Link>
              </div>
              <div class="card first-home-card">
                <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/it-service2-1.png"></img>
              </div>
            </div>

            <div class="home__top__cards">
              <div class="card">
                <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/it-service1-1.png"></img>
              </div>
              <div class="card second-home-card">
                {" "}
                <div className="dg-market">
                  <h2>Web design & development</h2>
                  <p>
                    We believe brand interaction is key to communication. Real
                    innovations<br></br> and positive customer experience are
                    the heart of success.
                  </p>
                </div>
                <ul>
                  <li>
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Responsive Design</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Mobile App Developer</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>React Development</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>UI/UX Design</span>
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Data Marketing</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <BsFillPatchCheckFill className="ikon" />{" "}
                    <span>Angular Developer</span>
                  </li>
                </ul>
              </div>
              <Link to="/" className="button-href">
                {" "}
                <button>Read More</button>
              </Link>
            </div>
          </div> */}

          <div className="container" id="cards">
            {/* digital marketing section start */}
            <div className="digital-marketing-container">
              <div className="left">
                {/* top-container start */}
                <div className="top-container">
                  <h2>Digital Marketing</h2>
                  <p>
                    We believe brand interaction is key to communication. Real
                    innovations and positive customer experience are the heart
                    of success.
                  </p>
                  <div className="marketing-cards-container">
                    <div className="left-cards-container">
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />
                        {""}
                        <p>SEO Marketing</p>
                      </div>
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />{" "}
                        <p>SEO Marketing</p>
                      </div>
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />{" "}
                        <p>SEO Marketing</p>
                      </div>
                    </div>
                    <div className="right-cards-container">
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />
                        {""}
                        <p>SEO Marketing</p>
                      </div>
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />
                        {""}
                        <p>SEO Marketing</p>
                      </div>
                      <div className="card">
                        <BsFillPatchCheckFill className="card-icon" />
                        {""}
                        <p>SEO Marketing</p>
                      </div>
                    </div>
                  </div>
                  <Link className="readMore-btn">
                    <span>READ MORE</span>
                  </Link>
                </div>
                {/* top-container end */}
                {/* bottom-container start */}
                <div className="bottom-container"></div>
                {/* bottom-container end */}
              </div>
              <div className="right">
                <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/it-service1-1.png"></img>
              </div>
            </div>
          </div>
          {/* digital marketing section end */}
          {/* web-design-section start */}
          <div className="container">
            <div className="web-design-section">
              <div className="left">
                <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/it-service2-1.png"></img>
              </div>
              <div className="right">
                <h2>Web Design & Development</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>
                <div className="cards-container">
                  <div className="left-cards-container">
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />
                      {""}
                      <p>Responsive Design</p>
                    </div>
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />{" "}
                      <p>Mobile App Development</p>
                    </div>
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />{" "}
                      <p>React Development</p>
                    </div>
                  </div>
                  <div className="right-cards-container">
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />
                      {""}
                      <p>UI / UX Design</p>
                    </div>
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />
                      {""}
                      <p>Laravel Development</p>
                    </div>
                    <div className="card">
                      <BsFillPatchCheckFill className="card-icon" />
                      {""}
                      <p>Angular Development</p>
                    </div>
                  </div>
                </div>
                <Link className="readMore-btn">
                  <span>READ MORE</span>
                </Link>
              </div>
            </div>
          </div>
          {/* web-design-section start */}

          {/* <div className="home__video">
            <div className="home__video__content">
              <div className="home__video__content__tegs">
                <h2>
                  Why choose us to watch<br></br> this video more!
                </h2>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the<br></br> inspiration.
                </p>
                <Link to="/contact" className="button-href">
                  <button>Contact Us</button>
                </Link>
              </div>
              <div className="home__video__content__videoteg">
                {showIcon && (
                  <div className="icon4" onClick={handleIconClick}>
                    &#9658;
                  </div>
                )}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HhX0PWeePTk"
                  title="none"
                  frameborder="none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div> */}

          <div className="container">
            <div className="home__works">
              <div className="home__works__content">
                <h2>Our Latest works</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="home__works__cards">
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work1-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work2-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' 
                    
                    
                    Name='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work3-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work4-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work5-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
                <div className="home__works__cards__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/work6-1.jpg"></img>
                  <div className="info">
                    <p className="heading">Development</p>
                    <p className="description">
                      Designing a Better Cinema Experience
                    </p>
                    {/* <Link to='' className='info-btn'>
                      Case Study
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home__feedback">
            <div className="home__feedback__content">
              <p>Testinomials</p>
              <h2>Some lovely feedback from our clients</h2>
            </div>
            <Carusel />
          </div>

          <div className="home__blogs">
            <div className="container">
              <div className="home__blogs__content">
                <h2>Latest news</h2>
              </div>
              {/* <div className='home__blogs__cards'>
              <div className='home__blogs__cards__card'>
                <div className='home__blogs__cards__card__img'>
                  <img src='https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1-530x430.jpg'></img>
                </div>
                <div className='home__blogs__cards__card__content'>
                  <h2>How To Use Music To Boost Your Business</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className='home__blogs__cards__card'>
                <div className='home__blogs__cards__card__img'>
                  <img src='https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1-530x430.jpg'></img>
                </div>
                <div className='home__blogs__cards__card__content'>
                  <h2>How To Use Music To Boost Your Business</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className='home__blogs__cards__card'>
                <div className='home__blogs__cards__card__img'>
                  <img src='https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1-530x430.jpg'></img>
                </div>
                <div className='home__blogs__cards__card__content'>
                  <h2>How To Use Music To Boost Your Business</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
 
            </div> */}
              <section className="articles">
                <article>
                  <div className="article-wrapper">
                    <figure>
                      <img src="/src/images/blog-image1.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                      <h2>How To Use Music To Boost Your Business</h2>
                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                      <Link to="" className="read-more">
                        Read more{" "}
                        <span class="sr-only">about this is some title</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
                <article>
                  <div className="article-wrapper">
                    <figure>
                      <img src="/src/images/blog-image-2.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                      <h2>The Rise Of Marketing and Why You Need It</h2>
                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                      <Link to="" className="read-more">
                        Read more{" "}
                        <span class="sr-only">about this is some title</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
                <article>
                  <div className="article-wrapper">
                    <figure>
                      <img src="/src/images/blog-image-3.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                      <h2>How To Boost Your Digital Marketing Agency</h2>
                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                      <Link to="" className="read-more">
                        Read more{" "}
                        <span class="sr-only">about this is some title</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
