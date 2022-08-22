import { Route, Routes } from "react-router-dom"
import { History } from "../history/History"
import { PlayDeck } from "../play/PlayDeck"
import { PlayRound } from "../play/PlayRound"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/play" element={ <PlayDeck /> } />
            <Route path="/play/round" element={ <PlayRound /> } />
            <Route path="/history" element={ <History /> } />
        </Routes>
    )
}
