import { useEffect, useState } from "react"
import "./Play.css"

export const MealCard = (props) => {

    const [isHeld, setIsHeld] = useState()
    const toggleHold = () => {
        setIsHeld(!isHeld)
    }

    useEffect(() => {

        if (isHeld) {

            //Copy held array state to variable
            const heldCopy = [ ...props.held ]

            //Push card to array
            heldCopy.push(props.card)
            props.setHeld(heldCopy)
        }
        else if (isHeld === false) {

            //Copy held array state to variable
            const heldCopy = [ ...props.held ]

            //Find held card in array and remove it
            const foundHeld = heldCopy.findIndex(heldCard => heldCard.id === props.card.id)
            heldCopy.splice(foundHeld, 1)
            props.setHeld(heldCopy)
        }

    }, [isHeld])

    return (

        <div className="column">
            <div className="card meal-card">
                <div className="card-content">
                    <span className="icon">
                        <i className="fas fa-heart"></i>
                    </span>
                    <p>
                        {props.card.name}
                    </p>
                </div>
            </div>
            <button 
            className="button mt-1"
            onClick={toggleHold}>
                {!isHeld ? "Hold" : "Held"}
            </button>
        </div>
    )
}
