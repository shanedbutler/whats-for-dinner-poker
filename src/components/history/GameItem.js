import { Link } from "react-router-dom"

export const GameItem = (props) => {

    const gameDeck = props.decks.find(deck => deck.id === props.game.card.deckId)

    const convertedDate = new Date(props.game.timestamp)
    const gameDate = convertedDate.toLocaleString("en-US")

    return (
        <Link to={`/history/${props.game.id}`}>
            <li>{gameDeck.name} - {gameDate}</li>
        </Link>
    )
}