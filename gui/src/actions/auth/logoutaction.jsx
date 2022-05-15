import axios from "axios";
import {
    LOGOUT_SUCCESS, LOGOUT_FAIL
} from "../types";
import Cookie from "js-cookie";

export const logoutAPI = (token) => async dispatch => {

    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth/logout/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookie.get('csrftoken'),
                'Authorization': `${token}`
            }
        });

        if (res.data.success) {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
            console.log(res)
        }

    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL
        })
    };
};

