import { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestWorkCardInHome.scss";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const LatestWorkCardInHome = ({ latestWorkCardInHome }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
 };

  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredWorks = latestWorkCardInHome
    ? latestWorkCardInHome.filter(
        (work) =>
          work.services_property.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          work.services_property.services.title
            .toLowerCase()
            .includes(search.toLowerCase())
      )
    : [];

    const handleClick = (title) => {
      setSearch(title);
      setIsModalOpen(false);
    };

  return (
    <>
     {isModalOpen && <div className="overlay" onClick={openModal} />}
      <div  className="modal-section">
        <div class="kateqoriya-sec">
          <div class="kateqoriya">
            <div>
              <BiCategory className="category-icon" onClick={openModal}/>
            </div>
            <p>Kateqoriya seçin</p>
          </div>
          <div class="input-search">
            <input
              type="text"
              placeholder="search"
              onChange={handleSearch}
            />
            <div>
              <CiSearch className="category-search-icon" 
             
              
              />
            </div>
          </div>
        </div>

   
        {isModalOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <ul>
              {latestWorkCardInHome.map((card) => (
                <li
                  key={card.id}
                  onMouseEnter={() => handleMouseEnter(card.services_property.title)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(card.services_property.title)}
                >
                  {card.services_property.title}
                  <FaAngleRight />
                  {hoveredItem === card.services_property.title && (
                    <ul className="modal-2">
                      <li className="modal-2-li"
                     onClick={() => handleClick(card.services_property.services.title)}
                      >{card.services_property.services.title}</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
      <div className="home__works__cards">
        {filteredWorks &&
          filteredWorks.map((card) => (
            <Link to={card.link_url} key={card.id}>
              <div className="home__works__cards__card" key={card.id}>
                <img src={card.photo} alt={card.company_name} />
                <div className="info">
                  <p className="heading">{card.company_name}</p>
                  <p className="description">{card.services_category}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default LatestWorkCardInHome;
