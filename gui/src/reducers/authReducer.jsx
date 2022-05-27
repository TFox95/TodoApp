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
    const { type, payloadOne, payloadTwo } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: payloadOne
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: payloadOne
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: payloadOne,
                username: payloadTwo

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