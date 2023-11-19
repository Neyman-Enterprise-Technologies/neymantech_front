import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogList from "../../../Components/BlogList/BlogList";
import Loading from "../../../Components/Loading/Loading";
import UseFetch from "../../../UseFetch";
import { CgScrollV } from "react-icons/Cg";


export default function Blogs() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: blogs, error } = UseFetch(`${apiUrl}blog_api/blog/`);

  // const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);

  //SEEARCH  CARD  BY TITLE START

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBlogs = blogs
    ? blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.blog_category.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          (blog.tag &&
            blog.tag.some((t) =>
              t.name.toLowerCase().includes(search.toLowerCase())
            ))
      )
    : [];

  //SEARCH  CARD  BY TITLE END
  const currentDate = new Date();

  const filteredbyDate = filteredBlogs.filter((card) => {
    const cardDate = new Date(card.date);

    return cardDate < currentDate && card.is_active;
  });


  const [loading, setLoading] = useState(false);

  const [showIcon, setShowIcon] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 900,
      delay: 0,
      smooth: "easeInOutQuint",
    });
    setShowIcon(false);
  };
 
useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          {showIcon && (
            <div
              className="scroll-to-top"
              style={{
                opacity: showIcon ? 1 : 0,
                transition: "opacity 0.5s",
              }}
              onClick={handleScrollToTop}
            >
            <FaChevronUp className="scroll-icon" />
            </div>
          )}
          {/* heading start */}
          <div className="linkHeader">
            <div className="container">
              <div className="linkTitle">
                <h2>
                  Bl<span>o</span>gs
                </h2>
              </div>
            </div>
            <div className="linkLinks">
              <Link to="/home" className="linkLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">Blogs</Link>
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
                      onChange={handleSearch}
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

                    {filteredbyDate.slice(Math.max(filteredbyDate.length - 4, 0)).map((blog) => (
                      <Link to={`/blogs/${blog.slug}`} key={blog.id}>
                    <div className="post-details" key={blog.id}>
                    <div className="details-img">
                      <img src={blog.photo} alt="" />
                    </div>
                    <div className="description">
                      <p className="date">
                        {new Date(blog.created_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <div
                        className="recent-description"
                        dangerouslySetInnerHTML={{
                          __html: blog.short_descriptions,
                        }}
                      />
                    </div>
                  </div>
                  </Link>
                    ))}
                  </div>
                )}

                <div className="category-container">
                  <h2 className="title">Categories</h2>
                  <div className="category-list-container">
                    {blogs &&
                      blogs.map((_blog) => (
                        <p
                          key={_blog.blog_category.id}
                          onClick={() => setSearch(_blog.blog_category.name)}
                        >
                          {_blog.blog_category.name}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="tags-container">
                  <h2 className="title">Tags</h2>
                  <div className="tags">
                    {blogs &&
                      [
                        ...new Set(
                          blogs.flatMap((blog) => blog.tag.map((t) => t.name))
                        ),
                      ].map((name, index) => (
                        <Link key={index}>
                          <p onClick={() => setSearch(name)}>{name}</p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
         
        </motion.div>
      {/* )} */}
    </>
  );
}
