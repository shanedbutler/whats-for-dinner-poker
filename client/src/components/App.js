import { Route, Routes } from "react-router-dom"
import { About } from "./auth/About"
import { AuthNav } from "./auth/AuthNav"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Navbar } from "./nav/Navbar"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"
import "./App.css"

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
        <Route path="/about" element={
            <>
                <AuthNav />
                <About />
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
