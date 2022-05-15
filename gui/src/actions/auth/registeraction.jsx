import axios from "axios";
import {
    REGISTER_SUCCESS, REGISTER_FAIL,
} from "../types";
import Cookie from "js-cookie";

const registerAPI = (username, password, re_password) => async dispatch => {

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
        } else if (res.data.success) {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    };
};

export default registerAPI;