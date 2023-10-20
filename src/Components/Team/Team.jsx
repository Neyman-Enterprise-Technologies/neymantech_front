import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.scss";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Team = ({ team }) => {
  return (
    <section className="teamSection">
      <div className="teamHeaderContainer">
        <p>OUR TEAM</p>
        <h2>Meet our awesome team member</h2>
      </div>
      <div className="team-container">
        {team.map((member) => (
          <div className="team-container__cardContainer" key={member.id}>
            <div className="team-container__profile-container">
              <div className="team-container__socialContainer">
                <Link to={"https://www.facebook.com//"}>
                  <FontAwesomeIcon
                    className="team-container__teamSocialIcon"
                    icon={faFacebook}
                  />
                </Link>
                <Link to={"https://www.instagram.com//"}>
                  <FontAwesomeIcon
                    className="team-container__teamSocialIcon"
                    icon={faInstagram}
                  />
                </Link>
                <Link to={"https://www.instagram.com//"}>
                  <FontAwesomeIcon
                    className="team-container__teamSocialIcon"
                    icon={faLinkedin}
                  />
                </Link>
                <Link to={"https://twitter.com/"}>
                  <FontAwesomeIcon
                    className="team-container__teamSocialIcon"
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <img src={member.image} alt="" />
            </div>

            <div className="team-container__profile-details">
              <p className="team-container__name">{member.fullname}</p>
              <p className="team-container__job">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
