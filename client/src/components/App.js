import { Route, Routes } from "react-router-dom"
import { Navbar } from "./nav/Navbar"
import { ApplicationViews } from "./views/ApplicationViews"
import "./App.css"

export const App = () => {

    return <Routes>
        <Route path="*" element={
            <>
                <Navbar />
                <ApplicationViews />
            </>
        } />
    </Routes>
}
