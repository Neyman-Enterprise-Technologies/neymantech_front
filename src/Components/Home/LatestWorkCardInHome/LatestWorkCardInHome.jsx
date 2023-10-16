const LatestWorkCardInHome = ({ latestWorkCardInHome }) => {
  return (
    <div className="home__works__cards">
      {latestWorkCardInHome.map((card) => (
        <div className="home__works__cards__card" key={card.id}>
          <img src={card.photo} />
          <div className="info">
            <p className="heading">{card.company_name}</p>

            <p className="description">{card.services_category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestWorkCardInHome;
