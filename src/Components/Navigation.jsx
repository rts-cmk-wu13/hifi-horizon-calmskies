import { NavLink } from "react-router"
import './navigation.scss'
import HifiNavLink from "./HifiNavLink"
import Login from "../pages/Login"
import LoginButton from "./button/LoginButton"

export default function Navigation() {

    return (
        <>
            <nav className="flex justify-between py-2.5 px-5 bg-black text-white gap-4">
                <ul className="flex">
                    <li><HifiNavLink to="/">Home</HifiNavLink></li>
                    <li><HifiNavLink to="/list">Shop</HifiNavLink></li>
                    <li><HifiNavLink to="/about">About us</HifiNavLink></li>
                    <li><HifiNavLink to="/contact">Contact</HifiNavLink></li>
                </ul>
                <div >
                    <LoginButton>Login</LoginButton>
                    <LoginButton>Login</LoginButton>
                    <LoginButton>Login</LoginButton>
                </div>
            </nav>

        </>
    )
}