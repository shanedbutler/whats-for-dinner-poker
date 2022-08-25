import { Link } from "react-router-dom"

export const GameItem = (props) => {

    const convertedDate = new Date(props.game.timestamp)
    const gameDate = convertedDate.toLocaleString("en-US")

    return (
        <Link to={`/history/${props.game.id}`}>
            <li>{gameDate}</li>
        </Link>
    )
}