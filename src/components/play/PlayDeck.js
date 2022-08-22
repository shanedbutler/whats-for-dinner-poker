import { useEffect, useState } from "react"
import { fetchDecks } from "../../utils/apiUtils"
import { DeckCard } from "./DeckCard"


export const PlayDeck = () => {

    const [decks, setDecks] = useState([])

    useEffect(() => {
        fetchDecks()
        .then(decksArray => setDecks(decksArray))
    }, [])

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <p className="title">
                        Play
                    </p>
                    <p className="subtitle">
                        Select a deck
                    </p>
                </div>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5">
                <div className="column">
                </div>
                {
                    decks.map(deck => <DeckCard key={deck.id} deck={deck} />)
                }
                <div className="column">
                </div>
            </section>
        </>
    )
}
