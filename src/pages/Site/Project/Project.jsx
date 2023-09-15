import React, { useEffect, useState } from "react";
import "./Project.scss";
import Loading from "../../../Components/Loading/Loading";
import { BiChevronRight } from "react-icons/Bi";
import { Link } from "react-router-dom";

export default function Project() {
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
        <div className="projects">
          <div className="projects_heading">
        <h2>Projects</h2>
        <div className="lines"></div>
        <ul>
          <li>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <BiChevronRight className="iconss" />
          <li>
            <Link className="contact" to="/project">
              Projects
            </Link>
          </li>
        </ul>
      </div>
         <div className="projects__section">
         <div className="projects__categories">
            <div className="projects__categories__content">
              <h4>Veb dizayn xidmeti</h4>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
            </div>
            <hr className="projects__content__border" />
            <div className="projects__categories__content">
              <h4>Veb dizayn xidmeti</h4>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
              <div className="projects__ps">
                <hr /> <p>Veb sayt dizayni</p>
              </div>
            </div>
            <hr className="projects__content__border" />

          </div>
          <div className="projects__cards">
            <div className="projects__card__width">
              <div className="projects__card">
                <div className="projects__card__img">
                  <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" />
                  <div className="projects__card__up__content">
                    <p>Development</p>
                    <h4>Building Awesome Design</h4>
                    <button>Case study</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__card__width">
              <div className="projects__card">
                <div className="projects__card__img">
                  <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" />
                  <div className="projects__card__up__content">
                    <p>Development</p>
                    <h4>Building Awesome Design</h4>
                    <button>Case study</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__card__width">
              <div className="projects__card">
                <div className="projects__card__img">
                  <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" />
                  <div className="projects__card__up__content">
                    <p>Development</p>
                    <h4>Building Awesome Design</h4>
                    <button>Case study</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__card__width">
              <div className="projects__card">
                <div className="projects__card__img">
                  <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" />
                  <div className="projects__card__up__content">
                    <p>Development</p>
                    <h4>Building Awesome Design</h4>
                    <button>Case study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      )}
    </>
  );
}
