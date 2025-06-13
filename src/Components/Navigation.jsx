import { NavLink } from "react-router"
import './navigation.scss'
import HifiNavLink from "./HifiNavLink"
import Login from "../pages/Login"
import LoginButton from "./button/LoginButton"
import Search from "./Search"

export default function Navigation() {

    return (
        <>
            <nav className="flex justify-between py-2.5 px-5 bg-black text-white gap-4">
                <ul className="justify-between items-center flex gap-4">
                <HifiNavLink to="/"><img src="src\assets\logo_sml 1.png" alt="Logo" className="h-10 w-10 mr-2" /></HifiNavLink>
                    <li><HifiNavLink to="/list">Shop</HifiNavLink></li>
                    <li><HifiNavLink to="/about">about us</HifiNavLink></li>
                    <li><HifiNavLink to="/contact">Contact</HifiNavLink></li>
                </ul>
                <div className="justify-between items-center flex gap-4">
                    <Search className="rounded-sm "/>
                    <LoginButton/>
                    <LoginButton>Login</LoginButton>
                </div>
            </nav>

        </>
    )
}