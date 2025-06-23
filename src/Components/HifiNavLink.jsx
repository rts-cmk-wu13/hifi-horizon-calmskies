import { NavLink } from "react-router"


export default function HifiNavLink({ to, children, onClick }) {

   return (
      <NavLink to={to} onClick={onClick} className="hover:font-bold uppercase">{children}</NavLink>
   )
}