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


    const getDraw = () => {

        //Copy cards array and shuffle using Fisher–Yates method
        let arr = [...cards]
        let i = arr.length
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }

        //Remove first five cards from array and set removed cards to drawn, then update cards array
        const drawn = arr.splice(0, 5)
        setCards(arr)

        //Set drawn cards to state
        setDraw(drawn)

        //Iterate round
        setRoundId(roundId + 1)
    }

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
