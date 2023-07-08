import { useState } from "react"
import "./Play.css"
import { ResultCard } from "./ResultCard"

export const PlayCard = ({ card, toggleHandHeld }) => {
    const {id} = card
    const [isHeldButton, setIsHeldButton] = useState(card.isHeld)
    
    const toggleHold = () => {
        //Toggle state of is held button.
        setIsHeldButton(!isHeldButton)
        //Callback function (prop) to add isHeld property to held card in parent component
        toggleHandHeld(id)
    }

    return (
        <section className="is-flex is-flex-direction-column"
        onClick={toggleHold}>
            <ResultCard key={id} card={card} />
            <section className="is-flex is-justify-content-center">
                <button
                    className={`${isHeldButton && "is-dark"} button mt-3 mb-5`}>
                    {!isHeldButton ? "Hold" : "Held"}
                </button>
            </section>
        </section>
    )
}
