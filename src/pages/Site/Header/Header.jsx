import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import newlogo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-scroll";


function Navbar() {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
   
  };

return (
    <header>
   
      <NavLink to="/" className="logo-img">
        <img src={newlogo} alt="Responsive Image" />
      </NavLink>
      <nav className="navbar" ref={navRef}>
        <NavLink to="/" onClick={showNavbar}>

        Ana səhifə

        </NavLink>

        <NavLink to="/about" onClick={showNavbar}>
          Haqqımızda
        </NavLink>
        <Link to="/" onClick={showNavbar} /* onClick={handleScrollToServiceCards} */>
          Xidmətlər
        </Link>
        <NavLink to="/project" onClick={showNavbar}>
          İşlərimiz
        </NavLink>
        <NavLink to="/price" onClick={showNavbar}>
          Qiymətlər
        </NavLink>
        <ScrollLink to="team-section" smooth={true} duration={1500}>
          Komandamız
        </ScrollLink>
        
     
        
     
        <NavLink to="/blogs" onClick={showNavbar}>

        Bloq
        </NavLink>
        <NavLink to="/contact" onClick={showNavbar}>
        Əlaqə

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
