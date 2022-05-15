import {
    REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    ACQUIRE_USERNAME_SUCCESS, ACQUIRE_USERNAME_FAIL
} from "../actions/types";

const initialState = {
    isAuthenticated: null,
    username: null,
    token: null
};

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: payload

            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                username: null
            }
        case ACQUIRE_USERNAME_SUCCESS:
            return {
                ...state,
                username: payload
            }
        case ACQUIRE_USERNAME_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
            return state

        default:
            return state
    }
}