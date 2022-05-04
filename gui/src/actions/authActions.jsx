import axios from "axios";
import {
    REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL
} from "./types";
import Cookie from "js-cookie"


export const registerAPI = (username, password, re_password) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        }
    };

    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth/register/`,
            data: { username, password, re_password },
            config
        });

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            })
        }

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    };
};


export const loginAPI = (username, password) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken')
        }
    };

    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth/login/`,
            data: { username, password },
            config
        });

        console.log(res.data)

        if (res.data.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    };
};

export const logoutAPI = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookie.get('csrftoken'),
            'Authorization': `Token ${null}`
        }
    };

    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth/logout/`,
            config
        });

        console.log(res.data)

        if (res.data.success) {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type:LOGOUT_FAIL
            })
        }

    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL
        })
    };
};