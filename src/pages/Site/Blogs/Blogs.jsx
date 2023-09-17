
import React, { useEffect, useState } from "react";
import "./Blogs.scss";

import Loading from "../../../Components/Loading/Loading";
// import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
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
        
        </div>

      )}
    </>
  );
}


