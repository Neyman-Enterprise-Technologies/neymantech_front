import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const BlogList = ({ filteredBlogs }) => {
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  //  const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);
  // const { data: blogs, error } = UseFetch(`${apiUrl}blog_api/blog/`);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const currentDate = new Date();
  const filteredbyDate = filteredBlogs.filter((card) => {
    const cardDate = new Date(card.date);
  return cardDate < currentDate && card.is_active;;
  });
  
/*  Current posts  */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredbyDate.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


 

  useEffect(() => {
    setLoading(true);
    // window.scrollTo({ top:0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [filteredBlogs]);

  // useEffect(()=>{
  //     setCurrentPosts(filteredBlogs)
  // },[filteredBlogs])
  
  // useEffect(() => {
   
  //   setLoading(true);
  //   window.scrollTo({ top: 0 });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, [apiUrl]);

  return (
    <>
      <div className="cards-container">
        {/* {currentPosts.map((blog) => ( */}
           {currentPosts.map((blog) => (
          <Link to={`/blogs/${blog.slug}`} key={blog.id}>
            <div className="card">
              <div className="cardImgContainer">
                {/* r */}
                <img src={blog.photo} alt={blog.title} />
              </div>
              <div className="bottom-content">
                <h2>{blog.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: blog.short_descriptions }} />
              </div>
             
            </div>
          </Link>
        ))}
      </div>
      {filteredBlogs.length > postsPerPage && ( 
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredBlogs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    )}
    </>
  );
};

export default BlogList;
