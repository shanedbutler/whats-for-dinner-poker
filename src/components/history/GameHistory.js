import { useEffect, useState } from "react"
import { fetchDecks, fetchHistory, getLocalUser } from "../../utils/apiUtils"
import { GameItem } from "./GameItem"

export const GameHistory = () => {

    const currentUser = getLocalUser()

    const [gameHistory, setGameHistory] = useState([])
    const [gameList, setGameList] = useState([])

    const [decks, setDecks] = useState([])

    //Loop through gameHistory and push every 5th object to new array to make an index of games.
    const makeIndex = (arr) => {

        const gameIndex = []

        for (let i = 0; i < arr.length; i = i + 5) {
            gameIndex.push(arr[i])
        }
        setGameList(gameIndex)
    }

    //Get game history from database and set to state.
    useEffect(() => {
        fetchHistory(`?userId=${currentUser.id}&_expand=card`)
            .then(historyArray => setGameHistory(historyArray))
    }, [])

    useEffect(() => {
        fetchDecks()
        .then(decksArray => setDecks(decksArray))
    }, [])

    //Copy game history and pass it to fn
    useEffect(() => {
        const y = [...gameHistory]
        makeIndex(y)
    }, [gameHistory])

    return (
        <>
            <section className="hero is-small is-link">
                <div className="hero-body ml-3">
                    <p className="title">
                        Play History
                    </p>
                    <p className="subtitle">
                        Select a game
                    </p>
                </div>
            </section>
            <aside className="menu m-5">
                <p className="menu-label">
                    Recently Played
                </p>
                <ul className="menu-list">
                    {gameList.map(game => <GameItem key={game.id} game={game} decks={decks} />)}
                </ul>
            </aside>
        </>
    )
}
