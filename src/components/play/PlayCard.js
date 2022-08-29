import { useEffect, useState } from "react"
import "./Play.css"

export const PlayCard = (props) => {

    const [isHeld, setIsHeld] = useState(false)
    const toggleHold = () => {
        setIsHeld(!isHeld)
    }

    let suitIcon = ""
    switch (props.card.suit.name) {
        case 'Spades':
            suitIcon = "♠️"
            break
        case 'Hearts':
            suitIcon = "♥️"
            break
        case 'Diamonds':
            suitIcon = "♦️"
            break
        case 'Clubs':
            suitIcon = "♣"
            break
        default:
            suitIcon = "X"
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

        <div className="column">
            <div className="card meal-card has-background-light" >
                <div className="card-content">
                    <span className="icon">
                        {suitIcon}
                    </span>
                    <div className="is-flex is-justify-content-center is-align-items-center card-name">
                        <p>
                            {props.card.name}
                        </p>
                    </div>
                    <div className="is-flex is-justify-content-right">
                        <span className="icon">
                            {suitIcon}
                        </span>
                    </div>
                </div>
            </div>
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
        </div>
    )
}
