import { useEffect, useState } from "react"
import "./Play.css"
import { ResultCard } from "./ResultCard"

export const PlayCard = (props) => {

    const [isHeld, setIsHeld] = useState(false)
    const toggleHold = () => {
        setIsHeld(!isHeld)
    }

    useEffect(() => {
        if (isHeld) {
            //Copy held array state to variable
            const heldCopy = [...props.held]

            //Push card to array
            heldCopy.push(props.card)
            props.setHeld(heldCopy)
        }
        else if (!isHeld) {
            //Copy held array state to variable
            const heldCopy = [...props.held]

            //Find held card in array and remove it
            const foundHeld = heldCopy.findIndex(heldCard => heldCard.id === props.card.id)
            heldCopy.splice(foundHeld, 1)
            props.setHeld(heldCopy)
        }
    }, [isHeld])

    return (
        <section className="is-flex is-flex-direction-column">
            <ResultCard key={props.card.id} card={props.card} />
            <section className="is-flex is-justify-content-center">
                {
                    isHeld ?
                        <button
                            className="button mt-3 is-dark"
                            onClick={toggleHold}>
                            Held
                        </button>
                        :
                        <button
                            className="button mt-3"
                            onClick={toggleHold}>
                            Hold
                        </button>
                }
            </section>
        </section>
    )
}
