import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../../utils/apiUtils.js"
import "./Auth.css"

//Module component handles Login page

export const Login = () => {
    const emailRef = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const loginRef = { email: emailRef.current.value }

        fetchUsers(`?email=${loginRef.email}`)
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
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <h2>
                        Login
                    </h2>
                </div>
            </section>
            <section className="container is-fluid is-max-desktop columns is-centered mt-5">
                <div className="column is-5-tablet is-5-desktop is-4-widescreen box p-5 form-box">
                    <div className="is-size-5">
                        Player Login
                    </div>
                    <form className="mt-3" onSubmit={handleLogin}>
                        <fieldset className="field">
                            <p className="control has-icons-left">
                                <input className="input"
                                    type="email"
                                    placeholder="Email"
                                    ref={emailRef}
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
                </div>
            </section>
        </>
    )
}
