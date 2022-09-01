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
    const { deck } = location.state

    const roundsToPlay = 3
    const [roundCount, setRoundCount] = useState(0)

    const [cardDeck, setCardDeck] = useState([])
    const [handCards, setHandCards] = useState([])

    //Prep deck's cards for play
    const prep = (arr) => {
        //Filter deck's cards if in vegetarian mode
        if (deck.vegMode) {
            arr = arr.filter(card => card.isVegetarian)
        }
        //Fisher-Yates shuffle
        let i = arr.length
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        //Assign isHeld property and set to state
        arr.forEach(card => card.isHeld = false)
        setCardDeck(arr)
    }

    //GET cards for selected deck and send to shuffle
    useEffect(() => {
        fetchCards(`?deckId=${deck.id}&_expand=suit`)
            .then(cardsArray => prep(cardsArray))
    }, [])

    const playGame = (cards) => {

        //Draw count is set to 5 less the number of cards held 
        const heldCards = handCards.filter(card => card.isHeld)
        const drawCount = 5 - heldCards.length

        //Remove (draw) required cards from card deck and assign to drawnCards
        let drawnCards = cards.splice(-drawCount)

        //Insert drawnCards to heldCards in the correct position if any heldCards exist
        let updatedHand = handCards
        if (heldCards.length) {

            //Find index values of handCards that are to be replaced
            let indexesToReplace = []
            handCards.forEach((card, i) => {
                if (!card.isHeld) {
                    indexesToReplace.push(i)
                }
            })

            //Add the drawn cards at each index to replace
            indexesToReplace.forEach((index, jdex) => {
                updatedHand[index] = drawnCards[jdex]
            })
            //Set state to round's hand of cards to be displayed
            setHandCards(updatedHand)

            //Update state with array minus removed cards
            setCardDeck(cards)
        }
        else {
            setHandCards(drawnCards)
        }
        //Advance round
        setRoundCount(roundCount + 1)
    }

    //Toggle isHeld property and set to state
    const toggleHandHeld = (id) => {

        //Copy hand state
        const handCardsCopy = handCards

        //Find card and toggle boolean property
        const cardToToggle = handCardsCopy.find(card => card.id === id)
        cardToToggle.isHeld = !cardToToggle.isHeld

        //Set state
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
                            {   //Alternate deck image colors
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
