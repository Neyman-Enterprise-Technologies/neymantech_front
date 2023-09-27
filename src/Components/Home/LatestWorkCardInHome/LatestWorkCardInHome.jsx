const LatestWorkCardInHome = ({ latestWorkCardInHome }) => {
  return (
    <div className="home__works__cards">
      {latestWorkCardInHome.map((card) => (
        <div className="home__works__cards__card">
          <img src={card.imgSrc} />
          <div className="info">
            <p className="heading">{card.title}</p>
            <p className="description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestWorkCardInHome;
