import { Link } from "react-router-dom"

export const GameItem = (props) => {

    return (
        <Link to={`/history/${props.game.id}`}>
            <li>{props.game.timestamp}</li>
        </Link>
    )
}