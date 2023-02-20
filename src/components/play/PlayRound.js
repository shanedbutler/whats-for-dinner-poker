import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { fetchCards } from "../../utils/apiUtils.js"
import { PlayCard } from "./PlayCard"
import cardBackGreen from "../../assets/dinner-poker-back-green-med.png"
import cardBackPink from "../../assets/dinner-poker-back-pink-med.png"
import "./Play.css"

export const PlayRound = () => {

    const location = useLocation()
    const { deck } = location.state

    const roundsToPlay = 3
    const [roundCount, setRoundCount] = useState(0)

    const [cardDeck, setCardDeck] = useState([])
    const [handCards, setHandCards] = useState([])

    /**
     * Prepare deck of cards for play and set to state.
     * Filter card array if vegetarian mode is enabled,
     * shuffle card array order,
     * add isHeld property to cards and default to false.
     * @param {array} arr 
     */
    const prep = (arr) => {
        if (deck.vegMode) {
            arr = arr.filter(card => card.isVegetarian)
        }
        let i = arr.length
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        arr.forEach(card => card.isHeld = false)
        setCardDeck(arr)
    }

    /**
     * Get cards from API for selected deck, prep deck, and set to state
     */
    useEffect(() => {
        fetchCards(`?deckId=${deck.id}&_expand=suit`)
            .then(cardsArray => prep(cardsArray))
    }, [])

    /**
     * Draw new cards less than number held,
     * insert drawn cards in proper position to replace non-held cards if existing,
     * update hand and deck state, and advance round.
     * @param {array} cards 
     */
    const playGame = (cards) => {

        const heldCards = handCards.filter(card => card.isHeld)
        const drawCount = 5 - heldCards.length
        let drawnCards = cards.splice(-drawCount)
        let updatedHand = handCards

        if (heldCards.length) {
            let indexesToReplace = []
            handCards.forEach((card, i) => {
                if (!card.isHeld) {
                    indexesToReplace.push(i)
                }
            })
            indexesToReplace.forEach((i, j) => {
                updatedHand[i] = drawnCards[j]
            })
            setHandCards(updatedHand)
            setCardDeck(cards)
        } else {
            setHandCards(drawnCards)
        }
        setRoundCount(roundCount + 1)
    }

    /**
     * Toggle held property of cards in hand
     * @param {int} cardId 
     */
    const toggleHandHeld = (cardId) => {

        const handCardsCopy = handCards
        const cardToToggle = handCardsCopy.find(card => card.id === cardId)
        cardToToggle.isHeld = !cardToToggle.isHeld

        setHandCards(handCardsCopy)
    }

    return (
        roundCount <= roundsToPlay ?
            <>
                <section className="hero is-small is-primary">
                    <div className="hero-body ml-3">
                        <h2>
                            Play
                        </h2>
                        <p className="subtitle">
                            {roundCount < 1 ? 'Draw to begin' : `Round ${roundCount} / ${roundsToPlay}`}
                        </p>
                    </div>
                </section>
                <section className="columns is-centered is-multiline is-2-tablet mt-5">
                    <div className="column is-hidden-mobile">
                    </div>
                    {roundCount < 1 ?
                        <div className="column is-flex is-justify-content-center"
                        onClick={() => playGame(cardDeck)}>
                            {
                                deck.id % 2 === 0 ?
                                    <img className="meal-card" src={cardBackGreen}></img>
                                    :
                                    <img className="meal-card" src={cardBackPink}></img>
                            }
                        </div>
                        : handCards.map((card) => card && <PlayCard key={card.id} card={card} toggleHandHeld={toggleHandHeld} />)
                    }
                    <div className="column is-hidden-mobile">
                    </div>
                </section>
                <section className="is-flex is-justify-content-center">
                    <button
                        className="button mt-3 mb-5"
                        onClick={() => playGame(cardDeck)}>
                        Draw
                    </button>
                </section>
            </>
            :
            <Navigate to={`/play/result/${deck.vegMode ? "veg" : "reg"}`} state={{ finalDraw: handCards }} />
    )
}
