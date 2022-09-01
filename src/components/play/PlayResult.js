import { Link, useLocation } from "react-router-dom"
import { fetchHistory, postOption } from "../../utils/apiUtils"
import { getLocalUser } from "../../utils/utils"
import { ResultCard } from "./ResultCard"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useState } from "react"

export const PlayResult = () => {

    const location = useLocation()
    const { finalDraw } = location.state

    const [isSaved, setIsSaved] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const { width, height } = useWindowSize()

    const postResults = (e) => {
        e.preventDefault()

        if (isSaved === false) {

            //Build object data for storage and add to array
            const gameResult = []
            finalDraw.forEach((card, i) => {
                const cardObject = {
                    cardId: card.id,
                    positionId: i,
                    timestamp: Date.now(),
                    userId: getLocalUser().id
                }
                gameResult.push(cardObject)
            })

            //POST each cardObject from array to database
            Promise.all(gameResult.map(historyCard => fetchHistory("", postOption(historyCard))))

            //Toggle state
            setIsSaved(!isSaved)
        }
    }


    const clipboardResults = (e) => {
        e.preventDefault()

        //Map name property of each history object, add line breaks, convert to string, and copy to clipboard
        const nameArray = finalDraw.map(card => card.name)
        const listArray = nameArray.join('\r\n')
        const textList = listArray.toString()
        navigator.clipboard.writeText(textList)

        //Toggle state
        if (isCopied === false) {
            setIsCopied(!isCopied)
        }

    }

    return (
        <>
            <section className="hero is-small is-primary">
                <div className="hero-body ml-3">
                    <p>
                        <h2>Play</h2>
                    </p>
                    <p className="subtitle">
                        Final result
                    </p>
                </div>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5">
                <div className="column is-hidden-mobile">
                </div>
                {
                    finalDraw.map(card => {
                        return <ResultCard key={card.id} card={card} />
                    })

                }
                <div className="column is-hidden-mobile">
                </div>
            </section>
            <section className="field is-grouped is-flex is-justify-content-center">
                <Link to="/play/round" state={{ deckId: finalDraw[0].deckId }}>
                    <button className="button m-2 mr-1 mb-3">
                        Play Again
                    </button>
                </Link>
                <button
                    className={`${!isSaved ? "" : "is-link is-outlined"} button m-2 mr-1 mb-3`}
                    onClick={(e) => postResults(e)}>
                    {!isSaved ? "" :
                        <span className="icon is-small">
                            <i className="fas fa-check"></i>
                        </span>
                    }
                    <span>{!isSaved ? "Save" : "Saved"}</span>
                </button>
                <button
                    className={`${!isCopied ? "" : "is-link is-outlined"} button m-2 mb-3`}
                    onClick={(e) => clipboardResults(e)}>
                    {!isCopied ? "" :
                        <span className="icon is-small">
                            <i className="fas fa-check"></i>
                        </span>
                    }
                    <span>{!isCopied ? "Clipboard" : "Copied"}</span>
                </button>
            </section>
            <Confetti
                width={width}
                height={height}
                recycle={false}
                gravity={.05}
                opacity={.6}
            />
        </>
    )
}
