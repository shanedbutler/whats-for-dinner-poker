import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchHistory } from "../../utils/apiUtils"
import { getLocalUser } from "../../utils/utils"
import { GameCard } from "./GameCard"

export const GameResult = () => {
    const gameId = useParams().id
    const currentUser = getLocalUser()

    const [gameResult, setGameResult] = useState([])

    //Find history object that matches gameId passed in with useParams and use it to filter array
    const filterArray = (gameHistory) => {
        const foundObj = gameHistory.find(historyObj => historyObj.id === parseInt(gameId))
        setGameResult(gameHistory.filter(historyObj => historyObj.timestamp === foundObj.timestamp))
    }

    //Get game history from database and set to state.
    useEffect(() => {
        fetchHistory(`?userId=${currentUser.id}&_expand=card`)
            .then(historyArray => filterArray(historyArray))
    }, [])

    //Map name property of each history object, add line breaks, convert to string and copy to clipboard
    const clipboardResults = () => {
        const nameArray = gameResult.map(historyObj => historyObj.card.name)
        const listArray  = nameArray.join('\r\n')
        const textList = listArray.toString()
        navigator.clipboard.writeText(textList)
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
                    gameResult.map(historyObj => <GameCard key={historyObj.id} historyObj={historyObj} />)
                }
                <div className="column">
                </div>
            </section>
            <section className="is-flex is-justify-content-center">
                <Link to="/history">
                    <button className="button mt-1 mr-5">
                        Back to Index
                    </button>
                </Link>
                <button
                    className="button mt-1 mr-5"
                    onClick={clipboardResults}>
                    Copy to Clipboard
                </button>
            </section>
        </>
    )
}
