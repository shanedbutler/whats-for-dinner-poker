import { Route, Routes } from "react-router-dom"
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
        </Routes>
    )
}
