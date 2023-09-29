import "./Team.scss"

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
