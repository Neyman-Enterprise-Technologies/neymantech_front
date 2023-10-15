import { useParams } from "react-router-dom";
import UseFetch from "../../UseFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/Ai";

import Loading from "../../Components/Loading/Loading";
import "./BlogDetails.scss";

const BlogDetails = ({ handleCategoryClick }) => {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: blogs, error } = UseFetch(`${apiUrl}blog_api/blog/${id}`);

  // const { data: blogs, error } = UseFetch(`${apiUrl}blogs/${id}`);

  const [loading, setLoading] = useState(false);

  // CARD FILTER

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
        <section className="blogDetails">
          {/* BlogDetails Component start */}

          {error && <div>{error}</div>}
          {blogs && (
            <div className="blogDetails-container">
              <div className="blogHeader">
                <div className="blogDetailsHeader">
                  <div className="blogTitle">
                    <h2>
                      {/* The Rise Of Marketin<span>g</span>And Why You Need It */}
                      {blogs.title.split("").map((char, index) => (
                        <span
                          key={index}
                          style={
                            index === Math.floor(blogs.title.length / 2)
                              ? { borderBottom: "2px solid #f78da7" }
                              : {}
                          }
                        >
                          {char}
                        </span>
                      ))}
                    </h2>
                  </div>

                  <div className="blogLinks">
                    <Link to="/home" className="blogLink">
                      Home
                    </Link>
                    <FaAngleRight className="angleIcon" />
                    <Link to="blog" className="blogLink">
                      Blog
                    </Link>
                    <FaAngleRight className="angleIcon" />
                    <p>{blogs.title}</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="right-left-container">
                  <div className="left">
                    <div className="cards-container">
                      <div className="card">
                        <div className="cardImgContainer">
                          {/* r */}
                          <img src={blogs.photo} />
                        </div>
                        <div className="bottom-content">
                          <h2>{blogs.title}</h2>
                          {/* <p>{blogs.description}</p> */}
                          <p>{blogs.long_descriptions}</p>
                        </div>
                      </div>
                    </div>

                    {/* BlogDetails Component end */}
                  </div>
                  <div className="right">
                    <div className="search">
                      <div className="input-button-container">
                        <input type="text" placeholder="search..." />
                        <div className="search-icon-container">
                          <AiOutlineSearch className="search-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="recent-posts-container">
                      <h2>Recent Posts</h2>

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
                    {/* {blogs && (
                  <div className="recent-posts-container">
                    <h2>Recent Posts</h2>
                    <Link to={`/blogs/${blogs.id}`}>
                      {blogs.map((blog) => (
                        <div className="post-details">
                          <div className="details-img">
                            <img src={blog.photo} alt="" />
                          </div>
                          <div className="description">
                            <p className="date"></p>
                            <p className="title">
                              Making Peace With The Feast Or Famine Of
                              Freelancing
                            </p>
                          </div>
                        </div>
                      ))}
                    </Link>
                  </div>
                )} */}
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
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default BlogDetails;
