import React, { useState, useEffect } from 'react'
import signpic from '../assets/signup.png';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../store/Actions/auth.action';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const Signup = () => {

    const [userToken, setuserToken] = useState(Cookies.get("usertoken"));
    const navigate = useNavigate();
    const tempUserToken = Cookies.get("usertoken")
    // console.log("tempUserToken====", tempUserToken)


    useEffect(() => {
        setuserToken(Cookies.get("usertoken"));
        const tempUserToken = Cookies.get("usertoken")
        // console.log("tempUserToken====", tempUserToken)
        if (tempUserToken) {
            navigate("/");
        }
    }, [userToken])

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "", password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const handleRegister = () => {
        dispatch(userRegister(user));
        // if (payload === err) {
        //     alert("Incorrect email");
        // }
        // else alert("Registration Successful");
    }

    return (
        <>
            <div className="register-main">
                <div className="register">
                    <div className="register-container">
                        <h1>Sign Up</h1>

                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-email"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock-outline"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your Password" />
                            </div>

                        </form>

                        <div className="button">
                            <button type="submit" name="signup" id="signup" className="btn" value="register" onClick={handleRegister}>Register</button>
                        </div>

                    </div>
                    <div className="signup-image">
                        <figure>
                            <img src={signpic} alt="signup-pic" className="signimage" />
                        </figure>
                        <div className="next-link">
                            <div>already a user ?</div>
                            <Link to="/login" className="signup-link">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
