export const GameCard = ({ card, suits }) => {
    let suitIcon = ""
    const suit = suits.find(suit => suit.id === card.suitId)
    switch (suit?.name) {
        case 'Spades':
            suitIcon = "♠️"
            break
        case 'Hearts':
            suitIcon = "♥️"
            break
        case 'Diamonds':
            suitIcon = "♦️"
            break
        case 'Clubs':
            suitIcon = "♣"
            break
        default:
            suitIcon = "X"
    }

    return (
        <div className="column is-flex is-justify-content-center">
            <div className="card meal-card has-background-light">
                <div className="card-content">
                    <span className="icon has-tooltip-primary" data-tooltip={suit?.description}>
                        {suitIcon}
                    </span>
                    <div className="is-flex is-justify-content-center is-align-items-center card-name">
                        <p>
                            {card.name}
                        </p>
                    </div>
                    <div className="is-flex is-justify-content-right">
                        <span className="icon has-tooltip-primary" data-tooltip={suit?.description}>
                            {suitIcon}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
