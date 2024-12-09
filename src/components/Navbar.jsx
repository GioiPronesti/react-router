import { NavLink } from "react-router-dom";

export default function Navbar(){

    return (
        <div>
            <nav>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </nav>
        </div>
    )
}