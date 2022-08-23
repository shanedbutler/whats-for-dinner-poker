import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchCards } from "../../utils/apiUtils"
import { MealCard } from "./MealCard"

export const PlayRound = () => {

    //Get selected deckId passed through state
    const location = useLocation()
    const { deckId } = location.state

    const [roundId, setRoundId] = useState(1)

    const [cards, setCards] = useState([])

    const [draw, setDraw] = useState([])

    const [held, setHeld] = useState([])

    //Fisher–Yates shuffle
    const shuffle = (arr) => {
        let i = arr.length
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        return arr
    }

    const getDraw = () => {

        //Draw count is set to 5 less the number of cards held 
        const drawCount = (5 - held.length)

        //Shuffle cards array
        const shuffledCards = shuffle(cards)

        //Remove required cards from cards array and set removed cards to drawn, then update cards array
        let drawn = shuffledCards.splice(0, drawCount)
        setCards(shuffledCards)

        //Assign each drawn card an index positionId
        for (let i = 0; i < drawn.length; i++) {
            drawn[i].positionId = i
        }

        //Add held cards to drawn in the correct position
        if (held.length) {
            held.map(card => drawn.splice(card.positionId, 0, card))
        }
        //Set drawn cards to state, drawn is mapped through in component return to render each meal card
        setDraw(drawn)

        //Advance round
        setRoundId(roundId + 1)
    }

    //Get cards for selected deck and set to state
    useEffect(() => {
        fetchCards(`?deckId=${deckId}`)
            .then(cardsArray => setCards(cardsArray))
    }, [])

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <p className="title">
                        Play
                    </p>
                    <p className="subtitle">
                        Round {roundId}
                    </p>
                </div>
            </section>
            <section>
                <button
                    className="button mt-1"
                    onClick={getDraw}>
                    Draw
                </button>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5">
                <div className="column">
                </div>
                {
                    draw.map(card => <MealCard key={card.id} card={card} held={held} setHeld={setHeld} />)
                }
                <div className="column">
                </div>
            </section>
        </>
    )
}
