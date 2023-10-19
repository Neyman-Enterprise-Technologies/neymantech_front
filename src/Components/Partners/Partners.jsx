import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import UseFetch from "../../UseFetch";
import "./Partners.scss";

const Partners = () => {
  // const apiUrl = import.meta.env.VITE_API_URL;
  // const { data: partners } = UseFetch(`${apiUrl}core_api/collaborator/`);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="partners">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {/* {partners &&
            partners.map(({ name, logo }) => (
              <motion.div className="item" key={name}>
                <img src={logo} alt="" />
                <p className="companyName">{name}</p>
              </motion.div>
            ))} */}

          <motion.div className="item">
            <img src="https://i.pinimg.com/736x/5f/2d/2a/5f2d2a3b2bd5c35c402366b101df4395--oil-company-logos-oil-companies.jpg"
              alt=""
            />
          <div className="companyName">2sssssssssdfsssss</div>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/OIP.BZ5b8WWOr95IEpiDEl7F3AHaEs?pid=ImgDet&w=600&h=380&rs=1"
              alt=""
            />
         <p className="companyName">   3dvssssdsfsdf</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://www.africa-foodmanufacturing.com/content/dam/Informa/africa-food-manufacturing/afm-2022/logos/media-partner/Unioil.png"
              alt=""
            />
            <p className="companyName">4sdvsvsvsvsvvsvsv</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/R.45629ff1578f4beab45339927ff93ccb?rik=GTREtC28jL0BaQ&riu=http%3a%2f%2fgreenoilco.com%2fwp-content%2fuploads%2f2017%2f03%2fgreen-oil-favicon.png&ehk=vipplHeDBzRiRzV6SSReAelJTzYkvdXcN8B23eKhGuY%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          <p className="companyName">gmbvnm,.m,.,bm,vfsvfs</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/OIP.GF8vLqVPBGtX7CUMSwAZGgHaHa?pid=ImgDet&w=600&h=600&rs=1"
              alt=""
            />
          <p className="companyName">ererererere</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://www.connect-beyond.com/images/icon-gas.png"
              alt=""
            />
          <p className="companyName">tttttttt</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/OIP.AgPGk25egcntxP7udizxMAHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          <p className="companyName">ssssss</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/OIP.i8-juUEgodcGEmgSa0NNNAHaHF?pid=ImgDet&w=700&h=670&rs=1"
              alt=""
            />
          <p className="companyName">fffff</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/R.40997b4086990ce13e9bb4dd46cea482?rik=kSLJVYSAs0F3jw&riu=http%3a%2f%2fchcpaint.com%2fimages%2fvendor_slides_ppg.png&ehk=dYvpKXGSnbm7WDhkXDS%2bg81t6GquesymP0NmZsUfQgI%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          <p className="companyName">vvvvv</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://www.elton-group.com/_nuxt/img/bg_mob.4124aa1.png"
              alt=""
            />
          <p className="companyName">ddddd</p>
          </motion.div>
          <motion.div className="item">
            <img src="https://th.bing.com/th/id/R.090d728523fc1b2a9ca00e990b4266f7?rik=CxoN1s9vxAp9oQ&pid=ImgRaw&r=0"
              alt=""
            />
          <p className="companyName">bbbbbbbbbbbbbb</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partners;
