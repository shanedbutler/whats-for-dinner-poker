import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers, postOption } from "../../utils/apiUtils.js"
import "./auth.css"

//Module component handles registration page

export const Register = () => {

    const navigate = useNavigate()

    const blankUser = {
        name: "",
        email: ""
    }

    const [user, setUser] = useState(blankUser)

    const registerNewUser = () => {
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
        e.preventDefault()
        return (
            fetchUsers(`?email=${user.email}`)
                .then(response => {
                    if (response.length > 0) {
                        window.alert("Account with that email address already exists")
                    }
                    else {
                        registerNewUser()
                    }
                }))
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setUser(blankUser)
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
                                    placeholder="Name"
                                    onChange={evt => {
                                        const userCopy = { ...user }
                                        userCopy.name = evt.target.value
                                        setUser(userCopy)
                                    }
                                    }
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
                                    onChange={evt => {
                                        const userCopy = { ...user }
                                        userCopy.email = evt.target.value
                                        setUser(userCopy)
                                    }
                                    }
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
                                <button onClick={handleCancel} className="button  is-primary">Cancel</button>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    )
}
