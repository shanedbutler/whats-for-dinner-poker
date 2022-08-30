import { useEffect, useState } from "react"
import "./Play.css"
import { ResultCard } from "./ResultCard"

export const PlayCard = ({ card, toggleHandHeld }) => {
    const {id} = card
    const [isHeldButton, setIsHeldButton] = useState(card.isHeld)
    
    const toggleHold = () => {
        setIsHeldButton(!isHeldButton)
        toggleHandHeld(id)
    }

    return (
        <section className="is-flex is-flex-direction-column">
            <ResultCard key={id} card={card} />
            <section className="is-flex is-justify-content-center">
                <button
                    className={`${!isHeldButton ? "" : "is-dark"} button mt-3`}
                    onClick={toggleHold}>
                    {!isHeldButton ? "Hold" : "Held"}
                </button>
            </section>
        </section>
    )
}
