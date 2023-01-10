export const ResultCard = ({ card }) => {
  let suitIcon = "";

  switch (card.suit.name) {
    case "Spades":
      suitIcon = "♠️";
      break;
    case "Hearts":
      suitIcon = "♥️";
      break;
    case "Diamonds":
      suitIcon = "♦️";
      break;
    case "Clubs":
      suitIcon = "♣";
      break;
    default:
      suitIcon = "X";
  }

  return (
    <div className="column is-flex is-justify-content-center">
      <div className="card meal-card has-background-light">
        <div className="card-content">
          <span
            className="icon has-tooltip-link"
            data-tooltip={card.suit.description}
          >
            {card.suit.name === "Clubs" ? (
              <span className="is-size-4">{suitIcon}</span>
            ) : (
              suitIcon
            )}
          </span>
          <div className="is-flex is-justify-content-center is-align-items-center card-name">
            <p>{card.name}</p>
          </div>
          <div className="is-flex is-justify-content-right">
            <span
              className="icon has-tooltip-link"
              data-tooltip={card.suit.description}
            >
              {card.suit.name === "Clubs" ? (
                <span className="is-size-4">{suitIcon}</span>
              ) : (
                suitIcon
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
