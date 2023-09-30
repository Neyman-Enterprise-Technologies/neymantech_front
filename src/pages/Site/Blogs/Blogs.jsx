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

  const [searchCard, setSearchCard] = useState("");

  
 /*   select by category start*/
 const [selectedCategory, setSelectedCategory] = useState(null);

 const filteredBlogs = selectedCategory ? blogs.filter((blog) => blog.category === selectedCategory) : blogs;

 const handleCategoryClick = (category) => {
   setSelectedCategory(category);
 };
 /*   select by category end*/


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

          <div className="container">
            <section className="blogs">
              <div className="left">
                {/* BlogList Component start */}

                {error && <div>{error}</div>}
                {blogs && filteredBlogs && (
                  <BlogList
                    blogs={blogs.filter((item) => {
                      return searchCard.toLowerCase() === ""
                        ? item
                        : item.title.toLowerCase().includes(searchCard);
                    })}
                  />
                )}

                {/* BlogList Component end */}
              </div>
              <div className="right">
                <div className="search">
                  <div className="input-button-container">
                    <input
                      type="text"
                      placeholder="search..."
                      onChange={(e) => setSearchCard(e.target.value)}
                    />
                    <div className="search-icon-container">
                      <AiOutlineSearch className="search-icon" />
                    </div>
                  </div>
                </div>
                <div className="recent-posts-container">
                  <h2>Recent Posts</h2>

                  {blogs &&
                    blogs
                      .filter((filtered) => {
                        return searchCard.toLowerCase() === ""
                          ? blogs
                          : filtered.title.toLowerCase().includes(searchCard);
                      })
                      .map((blog) => (
                        <Link to={`/blogs/${blog.id}`} key={blog.id}>
                          <div className="post-details">
                            <div className="details-img">
                              <img src={blog.photo} alt="" />
                            </div>
                            <div className="description">
                              <p className="date">{blog.date}</p>
                              <p className="title">{blog.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                </div>
                <div className="category-container">
                  <h2 className="title">Categories</h2>
                  <div className="category-list-container">
                    <p onClick={() => handleCategoryClick("Business")}>Business</p>
                    <p onClick={() => handleCategoryClick("Digital")}>Digital</p>
                    <p onClick={() => handleCategoryClick("Digital")}>Family</p>
                    <p onClick={() => handleCategoryClick("Machine Learning")}>Machine Learning</p>
                    <p onClick={() => handleCategoryClick("Marketing")}>Marketing</p>
                    <p onClick={() => handleCategoryClick("Music")}>Music</p>
                    <p onClick={() => handleCategoryClick("Security")}>Security</p>
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
