
import { Link } from "react-router-dom";



const BlogList = ({ blogs }) => {


// const [searchCard, setSearchCard] = useState("")
// console.log(searchCard);
 
return (
    <div className="cards-container">
      {blogs.map((blog) => (
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
