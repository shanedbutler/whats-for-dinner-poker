import { Route, Routes } from "react-router-dom"
import { AuthNav } from "./auth/AuthNav"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Navbar } from "./nav/Navbar"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"

export const App = () => {

    return <Routes>
        <Route path="/login" element={
            <>
                <AuthNav />
                <Login />
            </>
        } />
        <Route path="/register" element={
            <>
                <AuthNav />
                <Register />
            </>
        } />

        <Route path="*" element={
            <Authorized>
                <Navbar />
                <ApplicationViews />
            </Authorized>
        } />
    </Routes>
}
