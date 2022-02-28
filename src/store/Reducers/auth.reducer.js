import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, } from "../../Constants/actionType"

const initialState = {
    isLoading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                isLoading: false,
            }
        case LOGIN_FAILED:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}