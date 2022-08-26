import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchHistory, getLocalUser } from "../../utils/apiUtils"
import { ResultCard } from "../play/ResultCard"

export const GameResult = () => {
    const gameId = useParams().id
    const currentUser = getLocalUser()
    
    const [gameResult, setGameResult] = useState([])

    //Find card that matches gameId passed in with useParams and use it to filter array
    const filterArray = (gameHistory) => {
        const cardGuide = gameHistory.find(card => card.id === parseInt(gameId))
        setGameResult(gameHistory.filter(card => card.timestamp === cardGuide.timestamp))

        // for (let i = (gameId); i <= (gameId + 5); i++) {
        //     gameResult.push(gameHistory[i])
        // }
    }

    const mapArray = () => {
        gameResult.map(card => {
            return <ResultCard key={card.id} card={card} />
        })
    }

    //Get game history from database and set to state.
    useEffect(() => {
        fetchHistory(`?userId=${currentUser.id}&_expand=card`)
            .then(historyArray => filterArray(historyArray))
    }, [])

    return (
        <section className="columns is-centered is-multiline is-2-tablet mt-5">
            <div className="column">
            </div>
            {
                mapArray()
            }
            <div className="column">
            </div>
        </section>
    )
}