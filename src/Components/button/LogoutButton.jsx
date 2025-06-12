import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router"

export default function LogoutButton() {
    const { logout, token } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout()
        setTimeout(() => { navigate("/") }, 0) // skal vøre der for at for at sikre navigate eventet sker som det sidste.
    }

    /*
    const handleLogout = () => {
        ...
        }
    */

    return token ? (
        <button onClick={handleLogout}>Log out</button>
    ) : <Link to="login">Login</Link>
}