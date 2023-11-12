import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import newlogo from "../../../images/logo.png";
import { NavLink,useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
   
  };

  return (
    <header>
      <NavLink to="/" className="logo-img">
        <img src={newlogo} alt="Responsive Image" />
      </NavLink>
      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavbar}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={showNavbar}>
          About
        </NavLink>
        <NavLink to="/project" onClick={showNavbar}>
          Projects
        </NavLink>
        <NavLink to="/price" onClick={showNavbar}>
          Price
        </NavLink>
        <ScrollLink
          to="services" 
          smooth={true}
          duration={500}
          // onClick={showNavbar}
          onClick={showNavbar}
          
        >
          Service
        </ScrollLink>

        <NavLink to="/blogs" onClick={showNavbar}>
          Blogs
        </NavLink>
        <NavLink to="/contact" onClick={showNavbar}>
          Contact
        </NavLink>
        {/* <NavLink to="/faq" onClick={showNavbar}>Faq</NavLink> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes className="navbar-open-icon" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
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
