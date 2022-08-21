import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../../utils/apiUtils.js"

//Module component handles Login page

export const Login = () => {
    const [email, setEmail] = useState("bdancer304@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        fetchUsers(`?email=${email}`)  //fetch call
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("dinnerPokerUser", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
            <main className="container is-max-desktop">
                <form className="form--login" onSubmit={handleLogin}>
                    <fieldset className="field">
                        <p className="control has-icons-left">
                            <input className="input"
                                type="email"
                                placeholder="Email"
                                onChange={evt => setEmail(evt.target.value)}
                                required autoFocus />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </fieldset>
                    <fieldset className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </fieldset>
                    <fieldset className="field">
                        <p className="control">
                            <button className="button is-success">
                                Login
                            </button>
                        </p>
                    </fieldset>
                </form>
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
            </main>
    )
}
