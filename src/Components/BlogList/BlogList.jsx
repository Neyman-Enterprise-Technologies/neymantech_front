import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // const { data: blogs, error } = UseFetch(`${apiUrl}blogs`);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${apiUrl}blogs`);
      setPosts(res.data);
    };
    fetchPosts()
  },[]);
  console.log(posts)

/*   Get Current posts */
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts =  posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
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
  );
};

export default BlogList;
