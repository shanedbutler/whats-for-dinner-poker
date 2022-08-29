import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchHistory, getLocalUser } from "../../utils/apiUtils"
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
        </>
    )
}
