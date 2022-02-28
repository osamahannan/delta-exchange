import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <h1>Delta Exchange</h1>
            </div>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/register" >Register</Link></li>
                <li><Link to="/login" >Login</Link></li>
            </ul>
        </div>
    )
}

export default Navbar