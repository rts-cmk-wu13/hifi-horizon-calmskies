import { useLocation } from "react-router"

import Navigation from './Navigation'
import Login from "../pages/Login";

export default function Header() {
    const location = useLocation()

    console.log(location.pathname);


    return (
        <header>
        
                <>
                    < Navigation />
                   
                    {/* <LogoutButton /> */}
                </>
        
        </header>
    )
}