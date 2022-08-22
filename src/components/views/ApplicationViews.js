import { Route, Routes } from "react-router-dom"
import { History } from "../history/History"
import { Play } from "../play/PlayDeck"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/play" element={<Play />} />
            <Route path="/history" element={<History />} />
        </Routes>
    )
}
