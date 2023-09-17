import React, { useEffect, useState } from "react";
import "./Blogs.scss";

import Loading from "../../../Components/Loading/Loading";
// import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
export default function Blogs() {
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
        <div>
          {/* heading start */}
          <div className="blogHeader">
            <div className="container">
              <div className="blogTitle">
                <h2>
                  B<span>lo</span>g
                </h2>
              </div>
            </div>
            <div className="blogLinks">
              <Link to="/home" className="blogLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="blog">Blog</Link>
            </div>
          </div>
          {/* heading end */}

          <section className="blogs">
            <div className="left">
              <div className="card">
                <img
                  src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/ml-slider1-1-730x400.jpg"
                  alt=""
                />

                <div className="bottom-content">
                  <h2>Making Peace With The Feast Or Famine Of Freelancing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/ml-slider3-1-730x400.jpg"
                  alt=""
                />

                <div className="bottom-content">
                  <h2>Making Peace With The Feast Or Famine Of Freelancing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-9-1-1-730x400.jpg"
                  alt=""
                />

                <div className="bottom-content">
                  <h2>Making Peace With The Feast Or Famine Of Freelancing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
