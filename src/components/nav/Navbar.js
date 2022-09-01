import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"

//Module component returns navbar

export const Navbar = () => {
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="container is-fluid is-max-desktop mt-5">
            <nav className="navbar is-size-5" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item is-size-4" to="/">
                    <h1>What's for Dinner Poker</h1>
                    </Link>

                    <a role="button" aria-label="menu" aria-expanded="false"
                        className={`navbar-burger ${isActive ? "is-active" : ""}`}
                        data-target="auth-nav"
                        onClick={toggleActive}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="auth-nav"
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}
                >
                    <div className="navbar-start">

                    </div>

                    <div className="navbar-end">
                        <Link
                            className="navbar-item" to="/play">
                            Play
                        </Link>

                        <Link
                            className="navbar-item" to="/history">
                            Game History
                        </Link>
                        {
                            localStorage.getItem("dinnerPokerUser")
                                ?
                                <Link className="navbar-item" to="" onClick={() => {
                                    localStorage.removeItem("dinnerPokerUser")
                                    navigate("/", { replace: true })
                                }}>Logout</Link>

                                : ""
                        }
                    </div>
                </div>
            </nav >
        </div>
    )
}
