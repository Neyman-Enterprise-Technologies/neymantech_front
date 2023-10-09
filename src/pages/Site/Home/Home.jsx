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
import ServiceCards from "../../../Components/Home/ServiceCards/ServiceCards";
import UseFetch from "../../../UseFetch";
import DijitalMarketingSecInHome from "../../../Components/Home/DijitalMarketingSecInHome/DijitalMarketingSecInHome";
import WebDesignSecHome from "../../../Components/Home/WebDesignSecHome/WebDesignSecHome";
import LatestWorkCardInHome from "../../../Components/Home/LatestWorkCardInHome/LatestWorkCardInHome";
import LatestNews from "../../../Components/Home/LatestNews/LatestNews";
export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;

  //*HOME - SERVICECARDS- SECTION-1
  // const { data: serviceCards, error } = UseFetch(`${apiUrl}service_api/package_property/`);
  const { data: serviceCards, error } = UseFetch(`${apiUrl}serviceCards`);
  
  //*HOME - DIJITAL MARKETING- SECTION-2
  const { data: digitalMarketingSecInHome } = UseFetch(`${apiUrl}digitalMarketingSecInHome`);
  // const { data: digitalMarketingSecInHome } = UseFetch(`${apiUrl}`);
    
  //*HOME - WEB DESIGN SECTION- SECTION-3
  const { data: webDesignSecHome } = UseFetch(`${apiUrl}webDesignSecHome`);
  // const { data: webDesignSecHome } = UseFetch(`${apiUrl}`);
  
  // const { data: latestWorkCardInHome } = UseFetch(`${apiUrl}service_api/last_works/}`);
  const { data: latestWorkCardInHome } = UseFetch(`${apiUrl}latestWorkCardInHome`);
  const { data: latestNews } = UseFetch(`${apiUrl}latestNews`);
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
            </div>
          </div>

          <div className="container" id="cards">
            {digitalMarketingSecInHome && (
              <DijitalMarketingSecInHome
                digitalMarketingSecInHome={digitalMarketingSecInHome}
              />
            )}
          </div>

          <div className="container">
            {webDesignSecHome && (
              <WebDesignSecHome webDesignSecHome={webDesignSecHome} />
            )}
          </div>

          <div className="container">
            <div className="home__works">
              <div className="home__works__header">
                <h2>Our latest works</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              {latestWorkCardInHome && (
                <LatestWorkCardInHome
                  latestWorkCardInHome={latestWorkCardInHome}
                />
              )}
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
              <div className="container">
                <div className="cards-wrapper">
                  {latestNews && <LatestNews latestNews={latestNews} />}
                </div>
                {/* <article>
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
                </article> */}
                {/* <article>
                  {latestNews && <LatestNews latestNews={latestNews}/>}
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
                </article> */}
                {/* <article>
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
                </article> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
