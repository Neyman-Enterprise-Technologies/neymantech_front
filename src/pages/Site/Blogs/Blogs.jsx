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
  const { data: blogs, error } = UseFetch(`${apiUrl}blog_api/blog/`);
  // const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);







  const [search, setSearch] = useState("");
  const filteredBlogs = blogs
  ? blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    )
  : [];

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
                {/* {blogs && <BlogList filteredBlogs={filteredBlogs} currentPage={currentPage} postsPerPage={postsPerPage}/>} */}
                

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

                {blogs && (
                  <div className="recent-posts-container">
                    <h2>Recent Posts</h2>
                    <Link to={`/blogs/${blogs.id}`}>
                      {blogs.map((blog) => (
                        <div className="post-details" key={blog.id}>
                          <div className="details-img">
                            <img src={blog.photo} alt="" />
                          </div>
                          <div className="description">
                            <p className="date">{blog.created_at.slice(0,10)}</p>
                            <p className="title">
                             {blog.short_descriptions}
                            </p>
                          </div>
                        </div>
                      ))}
                    </Link>
                  </div>
                )}

                <div className="category-container">
                  <h2 className="title">Categories</h2>
                  <div className="category-list-container">
                  {blogs&&blogs.map((_blog) => (
                          <p key={_blog.blog_category.id} onClick={() => handleCategoryClick(_blog.blog_category.name)}>
                            {_blog.blog_category.name}
                          </p>
                        ))}
                  </div>
                </div>
                <div className="tags-container">
                  <h2 className="title">Tags</h2>
                  <div className="tags">

                  {blogs &&
                      blogs.map(({ tag }) =>
                        tag.map(({ name,id }) => <Link  key={id}> <p>{name}</p></Link>)
                      )}
              
                     
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
