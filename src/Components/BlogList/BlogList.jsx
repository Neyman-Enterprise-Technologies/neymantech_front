import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${apiUrl}blogs`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  console.log(posts);

  /*   Get Current posts */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="cards-container">
        {currentPosts.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="card" key={blog.id}>
              <div className="cardImgContainer">
                {/* r */}
                <img src={blog.photo} />
              </div>
              <div className="bottom-content">
                <h2>{blog.title}</h2>
                {/* <p>{blog.short_descriptions}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default BlogList;
