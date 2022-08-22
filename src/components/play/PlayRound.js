import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchCards } from "../../utils/apiUtils"

export const PlayRound = () => {

    //Get selected deckId passed through state
    const location = useLocation()
    const { deckId } = location.state

    const [roundId, setRoundId] = useState(1)

    const [cards, setCards] = useState()

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
        </>
    )
}