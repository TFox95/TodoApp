import {
    REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL
} from "../actions/types";

const initialState = {
    isAuthenticated: null,
    username: '',
    token: ''
};

export default function (state = initialState, action) {
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
                isAuthenticated:true,
                username: payload,
                token: payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated:false,
                username: '',
                token: ''
            }
        case REGISTER_FAIL:
            return state

        default:
            return state
    }
}