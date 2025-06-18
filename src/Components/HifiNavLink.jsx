import { NavLink } from "react-router"


export default function HifiNavLink ({to, children}) {

return (
   <NavLink to={to} className="hover:font-bold uppercase">{children}</NavLink> 
)
}