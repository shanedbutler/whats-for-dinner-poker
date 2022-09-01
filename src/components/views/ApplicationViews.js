import { Route, Routes } from "react-router-dom"
import { GameHistory } from "../history/GameHistory"
import { GameResult } from "../history/GameResult"
import { PlayDeck } from "../play/PlayDeck"
import { PlayResult } from "../play/PlayResult"
import { PlayRound } from "../play/PlayRound"
import { Welcome } from "../welcome/Welcome"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/play" element={ <PlayDeck /> } />
            <Route path="/play/round" element={ <PlayRound /> } />
            <Route path="/play/result/:veg" element={ <PlayResult /> } />
            <Route path="/history" element={ <GameHistory /> } />
            <Route path="/history/:id" element={ <GameResult /> } />
        </Routes>
    )
}
