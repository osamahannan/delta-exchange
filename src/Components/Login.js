import React, { useEffect, useState } from 'react'
import loginpic from '../assets/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tryLogin } from '../store/Actions/auth.action';
import Cookies from 'js-cookie';

const Login = () => {
    const userToken = Cookies.get("usertoken")
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userToken);
        if (userToken) {
            navigate("/");
        }
    }, [userToken])


    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(tryLogin({ login: email, password }))
    }


    return (
        <>

            <div className="login">

                <div className="signin-image">
                    <figure>
                        <img src={loginpic} alt="signin-pic" className="logimage" />
                    </figure>
                    <div className="next-link">
                        <div>Create an account ?</div>
                        <Link to="/register" className="signup-link">Sign Up</Link>
                    </div>
                </div>

                <div className="register-container">
                    <h1>Log In</h1>

                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-email"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="zmdi zmdi-lock"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Your Password" />
                        </div>

                    </form>

                    <div className="button">
                        <button type="submit" name="signin" id="signin" className="btn" value="Log In" onClick={handleLogin}>Log In</button>
                    </div>

                </div>

            </div>

            {/* <ToastContainer /> */}
        </>
    )
}

export default Login
