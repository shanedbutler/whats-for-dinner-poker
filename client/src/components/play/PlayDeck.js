import { useEffect, useState } from "react"
import { fetchDecks } from "../../utils/apiUtils"
import { DeckCard } from "./DeckCard"

export const PlayDeck = () => {

    const [decks, setDecks] = useState([])
    const [vegMode, setVegMode] = useState(false)

    useEffect(() => {
        fetchDecks()
            .then(decksArray => setDecks(decksArray))
    }, [])

    const toggleVegMode = () => {
        setVegMode(!vegMode)
    }

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <h2>
                        Play
                    </h2>
                    <p className="subtitle">
                        Select a deck
                    </p>
                </div>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5 has-text-centered">
                <div className="column is-hidden-mobile">
                </div>
                {
                    decks.map(deck => <DeckCard key={deck.id} deck={deck} vegMode={vegMode} />)
                }
                <div className="column is-hidden-mobile">
                </div>
            </section>
            <section className="is-flex is-justify-content-center mb-5">
                <div className="field">
                    <input id="vegetarianMode"
                        type="checkbox"
                        name="vegetarianMode"
                        className="switch is-link"
                        checked={vegMode}
                        onChange={toggleVegMode} />
                    <label htmlFor="vegetarianMode">Vegetarian Mode</label>
                </div>
            </section>
        </>
    )
}
