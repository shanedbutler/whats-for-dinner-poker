import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchHistory, fetchSuits } from "../../utils/apiUtils"
import { getLocalUser } from "../../utils/utils"
import { GameCard } from "./GameCard"

export const GameResult = () => {
    const gameId = useParams().id
    const currentUser = getLocalUser()

    const [gameResult, setGameResult] = useState([])
    const [suits, setSuits] = useState([])

    const [isCopied, setIsCopied] = useState(false)


    //Sort array by each object's positionId property for display in original result order
    const sortArray = (gameHistory) => {
        gameHistory.sort((a, b) => a.positionId - b.positionId)
        setGameResult(gameHistory)
    }

    //Find history object that matches gameId passed in with useParams and use it to filter array
    const filterArray = (gameHistory) => {
        const foundObj = gameHistory.find(historyObj => historyObj.id === parseInt(gameId))
        sortArray(gameHistory.filter(historyObj => historyObj.timestamp === foundObj.timestamp))
    }

    //Get game history from database and set to state.
    useEffect(() => {
        fetchHistory(`?userId=${currentUser.id}&_expand=card`)
            .then(historyArray => filterArray(historyArray))
    }, [])

    useEffect(() => {
        fetchSuits()
            .then(suitArray => setSuits(suitArray))
    }, [])

    const clipboardResults = (e) => {
        e.preventDefault()

        //Map name property of each history object, add line breaks, convert to string and copy to clipboard
        const nameArray = gameResult.map(historyObj => historyObj.card.name)
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
            <section className="hero is-small is-link">
                <div className="hero-body ml-3">
                    <p className="title">
                        Play History
                    </p>
                    <p className="subtitle">
                        Game results
                    </p>
                </div>
            </section>
            <section className="columns is-centered is-multiline is-2-tablet mt-5">
                <div className="column">
                </div>
                {
                    gameResult.map(historyObj => <GameCard key={historyObj.id} card={historyObj.card} suits={suits} />)
                }
                <div className="column">
                </div>
            </section>
            <section className="is-flex is-justify-content-center">
                <Link to="/history">
                    <button className="button m-2 mr-1 mb-3">
                        Back to List
                    </button>
                </Link>
                <button
                    className={`${!isCopied ? "" : "is-primary is-outlined"} button m-2 mb-3`}
                    onClick={(e) => clipboardResults(e)}>
                    {!isCopied ? "" :
                        <span className="icon is-small">
                            <i className="fas fa-check"></i>
                        </span>
                    }
                    <span>{!isCopied ? "Clipboard" : "Copied"}</span>
                </button>
            </section>
        </>
    )
}
