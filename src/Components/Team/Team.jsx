import "./Team.scss"

const Team = ({ team }) => {
  return (
    <div className="team-container">
      {team.map((member) => (
        <div className="team-container__cardContainer" key={member.id}>
          <div className="team-container__profile-container">
            <img src={member.memberProfile} alt="" />
          </div>
          <div className="team-container__profile-details">
            <p className="team-container__name">{member.name}</p>
            <p className="team-container__job">{member.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
