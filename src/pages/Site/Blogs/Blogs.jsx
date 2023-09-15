
import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import { BiChevronRight } from 'react-icons/Bi'
import Loading from "../../../Components/Loading/Loading";
// import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Blogs() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className='blog_heading'>
            <h2>Blogs</h2>
            <div className='lines'></div>
            <ul><li><Link className='home' to='/'>Home</Link></li><BiChevronRight className='iconss' /><li><Link className='contact' to='/blogs'>Blogs</Link></li></ul>
          </div>
          <div className="blogs">

            <div className="blogs__cards__column">
              <div className="blogs__card__width">
                <div className="blogs__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="hidden-overflow">
                    <h3>How to use music to boost your business</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blogs__card__width">
                <div className="blogs__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="hidden-overflow">
                    <h3>How to use music to boost your business</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
              </div>
              <div className="blogs__card__width">
                <div className="blogs__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="hidden-overflow">
                    <h3>How to use music to boost your business</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
              </div>
              <div className="blogs__card__width">
                <div className="blogs__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="hidden-overflow">
                    <h3>How to use music to boost your business</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogs__mini__cards__column">
              <div className="blogs__search">
                <input placeholder="Search" />
                {/* <AiOutlineSearch className="blogs__search__icon" /> */}
              </div>
              <div className="blogs__mini__cards">
                <h4>Recent posts</h4>
                <hr />
                <div className="blogs__mini__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="blogs__mini__card__content">
                    <p>April 25, 2020</p>
                    <h4>Making Peace With The Feast Or Famine</h4>
                  </div>
                </div>
                <hr />
                <div className="blogs__mini__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="blogs__mini__card__content">
                    <p>April 25, 2020</p>
                    <h4>Making Peace With The Feast Or </h4>
                  </div>
                </div>
                <hr />
                <div className="blogs__mini__card">
                  <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1.jpg" />
                  <div className="blogs__mini__card__content">
                    <p>April 25, 2020</p>
                    <h4>Making Peace With The Feast Or </h4>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
}


