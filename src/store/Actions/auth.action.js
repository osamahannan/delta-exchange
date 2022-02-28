import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from "../../Constants/actionType"
import axios from "axios";
import { baseURL } from "../../Constants/apiconfig";
import { authHeader } from "../../Constants/authHeader";
import Cookies from 'js-cookie'


export const tryLogin = (data) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_START });
        try {
            const res = await axios.post(`${baseURL}/api/users/login`, data, {
                headers: authHeader(),
            })
            Cookies.set("usertoken", res.data["user-token"])
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        } catch (err) {
            dispatch({ type: LOGIN_FAILED, payload: err })
        }
    }
}

export const userRegister = (data) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_START });
        try {
            const res = await axios.post(`${baseURL}/api/users/register`, data, {
                headers: authHeader(),
            })
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            dispatch(tryLogin({ login: data.email, password: data.password }))

        } catch (err) {
            dispatch({ type: REGISTER_FAILED, payload: err })
        }
    }
}