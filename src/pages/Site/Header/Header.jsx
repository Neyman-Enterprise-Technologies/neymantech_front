import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import newlogo from "../../../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			    <Link to="/" className="logo-img">
          <img src={newlogo} alt="Responsive Image" />
        </Link>
        <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>Home</Link>
  <Link to="/about" onClick={showNavbar}>About</Link>
  <Link to="/project" onClick={showNavbar}>Projects</Link>
  <Link to="/price" onClick={showNavbar}>Price</Link>
  <Link to="/blogs" onClick={showNavbar}>Blogs</Link>
  <Link to="/contact" onClick={showNavbar}>Contact</Link>
  <Link to="/faq" onClick={showNavbar}>Faq</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes className="navbar-open-icon" />
          </button>
        </nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars className="nav-close-open" />
			</button>
          {/* <div className="langSelect">
          <select name="languages" id="languages">
            <option value="english">EN</option>
            <option value="azərbaycan">AZ</option>
            <option value="türkçe">TR</option>
          </select>
        </div> */}
		</header>
	);
}

export default Navbar;
