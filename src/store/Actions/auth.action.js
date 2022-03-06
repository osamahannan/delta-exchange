import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED, FETCH_USER_DATA_START, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILED, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILED } from "../../Constants/actionType"
import axios from "axios";
import { baseURL } from "../../Constants/apiconfig";
import { authHeader } from "../../Constants/authHeader";
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';


export const tryLogin = (data) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_START });
        try {
            const res = await axios.post(`${baseURL}/api/users/login`, data, {
                headers: authHeader(),
            })
            Cookies.set("usertoken", res.data["user-token"])
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            setTimeout(() => {
                window.open('/', "_self")
            }, 2000);
            toast.success("You are successfully logged in", {
                autoClose: 1000
            });
        } catch (err) {
            dispatch({ type: LOGIN_FAILED, payload: err })
            toast.error("Incorrect Username or Passward");
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
            toast.success("User Registerd successfully");

        } catch (err) {
            toast.error("Invalid Username or password");
            dispatch({ type: REGISTER_FAILED, payload: err })
        }
    }
}
export const createUser = (data) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_USER_START });
        try {
            const res = await axios.post(`${baseURL}/api/data/companyData`, data, {
                headers: authHeader(),
            })
            dispatch({ type: CREATE_USER_START, payload: res.data });
            toast.success("Record added successfully", {
                autoClose: 1500
            });
            dispatch(getUser())
        } catch (err) {
            dispatch({ type: CREATE_USER_FAILED, payload: err })
        }
    }
}
export const getUser = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_DATA_START });
        try {
            const res = await axios.get(`${baseURL}/api/data/companyData`, {
                headers: authHeader(),
            })
            dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data });
        } catch (err) {
            dispatch({ type: FETCH_USER_DATA_FAILED, payload: err })
        }
    }
}
export const deleteUser = (objectId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_USER_START });
        try {
            const res = await axios.delete(`${baseURL}/api/data/companyData/${objectId}`, {
                headers: authHeader(),
            })
            dispatch({ type: DELETE_USER_SUCCESS, payload: objectId });
            toast.success("Record deleted successfully", {
                autoClose: 1500
            });
            dispatch(getUser())
        } catch (err) {
            dispatch({ type: DELETE_USER_FAILED, payload: err })
        }
    }
}
