import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import newlogo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";


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
      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavbar}>

        Anasəhifə

        </NavLink>

        <NavLink to="/about" onClick={showNavbar}>
          Haqqımızda
        </NavLink>
        <NavLink to="/" onClick={showNavbar} /* onClick={handleScrollToServiceCards} */>
          Xidmətlər
        </NavLink>
        <NavLink to="/project" onClick={showNavbar}>
          İşlərimiz
        </NavLink>
        <NavLink to="/price" onClick={showNavbar}>
          Qiymətlər
        </NavLink>
        <NavLink to="/about" onClick={showNavbar} /* onClick={handleScrollToServiceCards} */>
          Komandamız
          </NavLink>
        
     
        
     
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
