import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../../../../UseFetch";
import { BsCheckLg } from "react-icons/Bs";
import "./ServiceProperty.scss";

export default function ServiceProperty() {
  const { slug } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: serviceProperty } = UseFetch(
    `${apiUrl}service_api/services/${slug}`
  );

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
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="service"
      >
        {/* heading start */}

        <div className="linkHeader">
<<<<<<< HEAD
          <div className="container">
            <div className="linkTitle">
              <h2>
                {serviceProperty &&
                  serviceProperty.title.split("").map((char, index) => (
                    <div
                      key={index}
                      style={
                        index === Math.floor(serviceProperty.title.length / 2)
                          ? { borderBottom: "2px solid #f78da7" }
                          : {}
                      }
                    >
                      {char}
                    </div>
                  ))}
              </h2>
            </div>
          </div>
          <div className="linkLinks">
            <Link to="/home" className="linkLink">
              Ana səhifə
            </Link>
            <FaAngleRight className="angleIcon" />
            <Link to="service">{serviceProperty && serviceProperty.title}</Link>
=======
          <div className="linkTitle">
            <h2>
              {serviceProperty &&
                serviceProperty.title.split("").map((char, index) => (
                  <div
                    key={index}
                    style={
                      index === Math.floor(serviceProperty.title.length / 2)
                        ? { borderBottom: "2px solid #f78da7" }
                        : {}
                    }
                  >
                    {char}
                  </div>
                ))}
            </h2>
>>>>>>> 8fea2e9da1d925083d1f4499a7221bff2117674c
          </div>
        
        <div className="linkLinks">
          <Link to="/home" className="linkLink">
            Home
          </Link>
          <FaAngleRight className="angleIcon" />
          <Link to="service">{serviceProperty && serviceProperty.title}</Link>
        </div>
        </div>

        {/* heading end */}

        {/* first section start*/}

        <div className="serviceProperty-container container">
          {serviceProperty &&
            serviceProperty.service_details.map((detail, index) => (
              <div
                className={`firstSection ${
                  index % 2 === 0 ? "alternate-layout" : ""
                }`}
                key={detail.id}
              >
                {index % 2 !== 0 ? (
                  <div className="firstSection__imgContainer">
                    <img src={detail.photo} />
                  </div>
                ) : null}

                <div className="firstSection__textContent">
                  <p className="firstSection__header">{""}</p>
                  <p className="firstSection__title">{detail.title}</p>

                  <p className="firstSection__description">
                    {detail.description}
                  </p>

                  {detail.service_property_detail.map((s) => (
                    <div className="TitleContainer" key={s.id}>
                      <div className="titleContainerTitle">
                        <BsCheckLg className="firstSection__list-title-icon" />

                        <h2 className="titleOfTitle">{s.title}</h2>
                      </div>

                      <p className="contentOfTitle">{s.content}</p>
                    </div>
                  ))}
                </div>
                {index % 2 === 0 ? (
                  <div className="firstSection__imgContainer">
                    <img src={detail.photo} />
                  </div>
                ) : null}
              </div>
            ))}
        </div>

        {/* first section end */}
      </motion.div>
      {/* )} */}
    </>
  );
}
