import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [checkAuth, setCheckAuth] = useState(Cookies.get("usertoken"))
    const navigate = useNavigate()

    useEffect(() => {
        setCheckAuth(Cookies.get("usertoken"))
        if (!checkAuth) {
            navigate("/login")
        }
    }, [checkAuth])

    const removeToken = () => {
        Cookies.remove("usertoken");
        setCheckAuth(null);
    }
    return (
        <div className="nav-bar">
            <div className="logo">
                <h1>Delta Exchange</h1>
            </div>
            <ul>
                <li><Link to="/" >Home</Link></li>
                {checkAuth ? <li><Link to="/#" onClick={removeToken}>Logout</Link></li> : <>
                    <li><Link to="/register" >Register</Link></li>
                    <li> <Link to="/login" >Login</Link></li>
                </>}

            </ul>
        </div>
    )
}

export default Navbar