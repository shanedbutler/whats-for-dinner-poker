import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { fetchCards } from "../../utils/apiUtils.js"
import { PlayCard } from "./PlayCard"
import cardBackGreen from "../../assets/dinner-poker-back-green-med.png"
import cardBackPink from "../../assets/dinner-poker-back-pink-med.png"
import "./Play.css"

export const PlayRound = () => {

    //Selected deck passed through state and assigned
    const location = useLocation()
    const { deckId } = location.state

    const roundsToPlay = 2
    const [roundCount, setRoundCount] = useState(0)

    const [cardDeck, setCardDeck] = useState([])
    const [draw, setDraw] = useState([])
    const [held, setHeld] = useState([])

    //Fisher–Yates shuffle and set to state
    const shuffle = (arr) => {
        let i = arr.length
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        setCardDeck(arr)
    }

    //GET cards for selected deck and send to shuffle
    useEffect(() => {
        fetchCards(`?deckId=${deckId}&_expand=suit`)
            .then(cardsArray => shuffle(cardsArray))
    }, [])

    const getDraw = (cards) => {

        //Draw count is set to 5 less the number of cards held 
        const drawCount = (5 - held.length)

        //Remove required cards from card deck and assign removed cards to drawn, then update card deck
        let drawn = cards.splice(0, drawCount)
        setCardDeck(cards)

        //Add held cards to drawn in the correct position
        if (held.length) {
            held.map(heldCard => drawn.splice(heldCard.positionId, 0, heldCard))
        }

        //Assign each drawn card an index positionId
        for (let i = 0; i < drawn.length; i++) {
            drawn[i].positionId = i
        }

        //Set drawn cards to draw state. 
        //Draw is mapped in component return to render each individual play card.
        setDraw(drawn)

        //Advance round
        setRoundCount(roundCount + 1)
    }

    return (
        roundCount <= roundsToPlay ?
            <>
                <section className="hero is-small is-primary">
                    <div className="hero-body ml-3">
                        <p className="title">
                            Play
                        </p>
                        <p className="subtitle">
                            {roundCount < 1 ? 'Draw to begin' : `Round ${roundCount}`}
                        </p>
                    </div>
                </section>
                <section className="columns is-centered is-multiline is-2-tablet mt-5">
                    <div className="column">
                    </div>
                    {roundCount < 1 ?
                        <div className="column is-flex is-justify-content-center">
                            {   //Alternate deck image colors
                                deckId % 2 === 0 ?
                                    <img className="meal-card" src={cardBackGreen}></img>
                                    :
                                    <img className="meal-card" src={cardBackPink}></img>
                            }
                        </div>
                        : draw.map(card => <PlayCard key={card.id} card={card} held={held} setHeld={setHeld} />)
                    }
                    <div className="column">
                    </div>
                </section>
                <section className="is-flex is-justify-content-center">
                    <button
                        className="button mt-3"
                        onClick={() => getDraw(cardDeck)}>
                        Draw
                    </button>
                </section>
            </>
            :
            <Navigate to="/play/result" state={{ finalDraw: draw }} />
    )
}
