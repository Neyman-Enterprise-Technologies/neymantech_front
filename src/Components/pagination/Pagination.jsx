import { Link } from "react-router-dom";
import "./Pagination.scss"

const Pagination = ({ postsPerPage, totalPosts,paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
    <ul className="pagination">
    {currentPage > 1 && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#"
              className="page-link"
            >
              Prev
            </a>
          </li>
        )}
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="#" className="page-link">
            {number}
          </a>
        </li>
      ))}
      {currentPage < pageNumbers.length && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#"
              className="page-link"
            >
              Next
            </a>
          </li>
        )}
    </ul>
    </nav>
  );
};

export default Pagination;
