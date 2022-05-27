import axios from "axios";
import {
    LOGIN_SUCCESS, LOGIN_FAIL,
} from "../types";
import Cookie from "js-cookie";

const loginAPI = (username, password) => async dispatch => {

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
        let Res = res.data.success

        if (Res) {
            dispatch({
                type: LOGIN_SUCCESS,
                payloadOne: Res.token,
                payloadTwo: Res.username
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    };
};

export default loginAPI;