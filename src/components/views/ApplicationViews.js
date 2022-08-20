import { Route, Routes } from "react-router-dom"
import { History } from "../history/History"
import { Play } from "../play/Play"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<h2>Welcome to What's for Dinner Poker</h2>} />
            <Route path="/play" element={<Play />} />
            <Route path="/history" element={<History />} />
        </Routes>
    )
}
