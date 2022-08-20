import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"

//Module component returns navbar

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active" id="navbar__title">
                What's for Dinner Poker
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/play">Play</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/history">History</Link>
            </li>
            
            {
                localStorage.getItem("dinnerPokerUser")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("dinnerPokerUser")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
