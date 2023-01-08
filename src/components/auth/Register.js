import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers, postOption } from "../../utils/apiUtils.js"
import "./Auth.css"

//Component handles registration page

export const Register = () => {

    const navigate = useNavigate()
    const nameRef = useRef()
    const emailRef = useRef()

    /**
     * Register user object, via fetch POST and then set user response object to local storage
     * @param {object} user 
     * @returns Void?
     */
    const registerNewUser = (user) => {
        return (
            fetchUsers("", postOption(user))
                .then(createdUser => {
                    if (createdUser.hasOwnProperty("id")) {
                        localStorage.setItem("dinnerPokerUser", JSON.stringify({
                            id: createdUser.id,
                        }))

                        navigate("/")
                    }
                }))
    }

    const handleRegister = (e) => {
        const newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }
        e.preventDefault()
        return (
            fetchUsers(`?email=${newUser.email}`)
                .then(response => {
                    if (response.length > 0) {
                        window.alert("Account with that email address already exists")
                    }
                    else {
                        registerNewUser(newUser)
                    }
                }))
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <>
            <section className="hero is-small is-link">
                <div className="hero-body ml-3">
                    <h2>
                        Sign-Up
                    </h2>
                </div>
            </section>
            <section className="container is-fluid is-max-desktop columns is-centered mt-5">
                <div className="column is-5-tablet is-5-desktop is-4-widescreen box p-5 form-box">
                    <div className="is-size-5">
                        Register Player
                    </div>
                    <form className="mt-3" onSubmit={handleRegister}>
                        <fieldset className="field">
                            <p className="control has-icons-left">
                                <input className="input"
                                    type="text"
                                    ref={nameRef}
                                    required autoFocus />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </p>
                        </fieldset>
                        <fieldset className="field">
                            <p className="control has-icons-left">
                                <input className="input"
                                    type="email"
                                    placeholder="Email"
                                    ref={emailRef}
                                    required />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </p>
                        </fieldset>
                        <fieldset className="field is-grouped">
                            <p className="control">
                                <button type="submit" className="button is-success">
                                    Register
                                </button>
                            </p>
                            <p className="control">
                                <button onClick={handleCancel} className="button  is-primary">
                                    Cancel
                                </button>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    )
}
