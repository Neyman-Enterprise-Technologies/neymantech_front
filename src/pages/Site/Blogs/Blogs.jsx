import React, { useEffect, useState } from "react";
import "./Blogs.scss";

import Loading from "../../../Components/Loading/Loading";
import { AiOutlineSearch } from "react-icons/Ai";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import BlogList from "../../../Components/BlogList/BlogList";
import UseFetch from "../../../UseFetch";

// import Pagination from "../../../Components/pagination/pagination";

export default function Blogs() {
  const apiUrl = import.meta.env.VITE_API_URL;
  // const {data:blogs, error} = UseFetch(`${apiUrl}blog_api/blog/`)
  const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);

  const [search, setSearch] = useState("");
  const filteredBlogs = () => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  };
  

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
                  B<span className="blogTitleSpan">lo</span>g
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

          <div className="container">
            <section className="blogs">
              <div className="left">
                {/* BlogList Component start */}

                {error && <div>{error}</div>}
                {blogs && <BlogList filteredBlogs={filteredBlogs} />}

                {/* BlogList Component end */}
              </div>
              <div className="right">
                <div className="search">
                  <div className="input-button-container">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      type="text"
                      placeholder="search..."
                    />

                    <div className="search-icon-container">
                      <AiOutlineSearch className="search-icon" />
                    </div>
                  </div>
                </div>

                {/* {blogs && 
                        <Link to={`/blogs/${blogs.id}`} >
                        <div className="post-details">
                          <div className="details-img">
                            <img src={blogs.photo} alt="" />
                          </div>
                          <div className="description">
                            <p className="date">{blogs.date}</p>
                            <p className="title">{blogs.title}</p>
                          </div>
                        </div>
                      </Link>
                      
                      } */}
                {blogs && (
                  <div className="recent-posts-container">
                    <h2>Recent Posts</h2>
                    <Link to={`/blogs/${blogs.id}`}>
                      <div className="post-details">
                        <div className="details-img">
                          <img
                            src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/ml-slider1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="description">
                          <p className="date">April 25,2020</p>
                          <p className="title">
                            Making Peace With The Feast Or Famine Of Freelancing
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="post-details">
                      <div className="details-img">
                        <img
                          src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/ml-slider2-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="description">
                        <p className="date">April 25,2020</p>
                        <p className="title">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </p>
                      </div>
                    </div>
                    <div className="post-details">
                      <div className="details-img">
                        <img
                          src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/04/ml-slider3-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="description">
                        <p className="date">April 25,2020</p>
                        <p className="title">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </p>
                      </div>
                    </div>
                    <div className="post-details">
                      <div className="details-img">
                        <img
                          src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-9-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="description">
                        <p className="date">April 25,2020</p>
                        <p className="title">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="category-container">
                  <h2 className="title">Categories</h2>
                  <div className="category-list-container">
                    <p>Business</p>
                    <p>Digital</p>
                    <p>Family</p>
                    <p>Machine Learning</p>
                    <p>Marketing</p>
                    <p>Music</p>
                    <p>Security</p>
                  </div>
                </div>
                <div className="tags-container">
                  <h2 className="title">Tags</h2>
                  <div className="tags">
                    <div className="link-container">
                      <Link to="#">Agency</Link>
                      <Link to="#">Boost</Link>
                      <Link to="#">Buisness</Link>
                    </div>
                    <div className="link-container">
                      <Link to="#">Famly</Link>
                      <Link to="#">Marketing</Link>
                      <Link to="#">Music</Link>
                    </div>
                    <div className="link-container">
                      <Link to="#">Need</Link>
                      <Link to="#">Package</Link>
                      <Link to="#">Tips</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
