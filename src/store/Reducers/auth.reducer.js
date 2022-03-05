import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, FETCH_USER_DATA_START, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED, DELETE_USER_START, DELETE_USER_FAILED, DELETE_USER_SUCCESS, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILED } from "../../Constants/actionType"

const initialState = {
    isLoading: false,
    userRecords: [],
    error: []
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
                error: action.payload
            }
        case FETCH_USER_DATA_START:
            return {
                isLoading: true,
            }
        case FETCH_USER_DATA_SUCCESS:
            return {
                isLoading: false,
                userRecords: action.payload
            }
        case FETCH_USER_DATA_FAILED:
            return {
                isLoading: false,
                error: action.payload
            }

        case DELETE_USER_START: {
            return {
                isLoading: true
            }
        }
        case DELETE_USER_SUCCESS: {
            return {
                isLoading: false,
            }
        }
        case DELETE_USER_FAILED: {
            return {
                isLoading: false,
                error: action.payload
            }
        }
        case CREATE_USER_START: {
            return {
                isLoading: true
            }
        }
        case CREATE_USER_SUCCESS: {
            return {
                isLoading: false,
            }
        }
        case CREATE_USER_FAILED: {
            return {
                isLoading: false,
                error: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}