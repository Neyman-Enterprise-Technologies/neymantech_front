const BlogList = ({ blogs }) => {
  return (
    <div className="cards-container">
      {blogs.map((blog) => (
        <div className="card" key={blog.id}>
          <div className="cardImgContainer">
          
            <img src={blog.photo} />
          </div>
          <div className="bottom-content">
            <h2>{blog.title}</h2>
            <p>{blog.short_descriptions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
