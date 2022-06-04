import {
    REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL,
} from "../actions/types";

const initialState = {
    isAuthenticated: null,
    username: null,
    token: null
};

function auth (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: payload.isAuthenticated,
                token: payload.credintials.token,
                username: payload.credintials.username

            }
        case AUTHENTICATED_FAIL:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: null,
                token: null,
                username: null
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
            return state

        default:
            return state
    }
}

export default auth;