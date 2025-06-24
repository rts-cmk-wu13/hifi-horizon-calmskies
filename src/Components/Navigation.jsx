import { NavLink } from "react-router"
import './navigation.scss'
import HifiNavLink from "./HifiNavLink"
import Login from "../pages/Login"
import LoginButton from "./button/LoginButton"
import Search from "./Search"
import ShoppingCart from "./button/ShoppingCart"
import { useState } from "react"
import Burgermenu from "./Burgermenu"

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false); // track mobile menu is open

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen); //toggle menu state
    };

    return (
        <>
            <nav className="NAVIGATION flex justify-between items-center py-7 px-7 bg-black text-white gap-4 relative">
                {/* Logo: hidden on mobile, visible on medium screens and up */}
                <div className="flex items-center gap-2 hidden md:flex">
                    <HifiNavLink to="/">
                        <i className="fa-solid fa-user"></i>
                        <img src="src/assets/logo_sml 1.png" alt="Logo" className="h-10 w-10 mr-2" />
                    </HifiNavLink>
                </div>

                {/* Navigation links: hidden on mobile, visible on medium screens and up */}
                <ul className="UL hidden md:flex justify-between items-center gap-4">
                    <li><HifiNavLink to="/list">Shop</HifiNavLink></li>
                    <li><HifiNavLink to="/about">about us</HifiNavLink></li>
                    <li><HifiNavLink to="/contact">Contact</HifiNavLink></li>
                </ul>

                {/* Mobile: search, icons, and burger menu spread out evenly */}
                <div className="flex flex-1 justify-between items-center md:hidden"> {/* CHANGED: flex-1 and justify-between, only on mobile */}
                    <Search className="rounded-sm" />
                    <LoginButton />
                    <ShoppingCart />
                    <Burgermenu onClick={handleMenuClick} />
                </div>

                {/* Desktop: icons (hidden on mobile) */}
                <div className="hidden md:flex items-center gap-7 ml-auto">
                    <Search className="rounded-sm" />
                    <LoginButton />
                    <ShoppingCart />
                </div>

                {/* Mobile menu - only visible when menuOpen is true */}
                {menuOpen && (
                    <div
                        className="fixed top-15 right-0 h-full w-1/3 bg-black bg-opacity-25  text-white shadow-lg z-50 flex flex-col items-center md:hidden "
                        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
                    >

                        {/* Logo at the top of the dropdown menu */}
                        <div className="flex flex-col items-center py-6">
                            <HifiNavLink to="/" onClick={() => setMenuOpen(false)}> <img src="src/assets/logo_sml 1.png" alt="Logo" className="h-10 w-10" /></HifiNavLink>
                        </div>
                        <ul className="flex flex-col items-center w-full">
                            <li className="py-2 w-full text-center">
                                <HifiNavLink to="/list" onClick={() => setMenuOpen(false)}>Shop</HifiNavLink>
                            </li>
                            <li className="py-2 w-full text-center">
                                <HifiNavLink to="/about" onClick={() => setMenuOpen(false)}>about us</HifiNavLink>
                            </li>
                            <li className="py-2 w-full text-center">
                                <HifiNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</HifiNavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}