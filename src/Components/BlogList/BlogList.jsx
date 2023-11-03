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
  
  /*   Get Current posts */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts]= useState(posts.slice(indexOfFirstPost, indexOfLastPost))

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
      setCurrentPosts(filteredBlogs)
  },[filteredBlogs])
  
  useEffect(() => {
    // const fetchPosts = async () => {
    //   // const res = await axios.get(`${apiUrl}blogs`);
    //   const res = await axios.get(`${apiUrl}blog_api/blog/`);

    //   setPosts(res.data);
    // };
    // fetchPosts();
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [apiUrl]);

  return (
    <>
      <div className="cards-container">
        {currentPosts.map((blog) => (
          <Link to={`/blogs/${blog.slug}`} key={blog.id}>
            <div className="card" key={blog.id}>
              <div className="cardImgContainer">
                {/* r */}
                <img src={blog.photo} />
              </div>
              <div className="bottom-content">
                <h2>{blog.title}</h2>
                <p>{blog.short_descriptions}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        // totalPosts={filteredBlogs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default BlogList;
