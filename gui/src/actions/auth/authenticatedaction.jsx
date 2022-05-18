import axios from "axios";
import {
    AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL
} from "../types";
import Cookie from "js-cookie";

const checkAuthentication = (token) => async dispatch => {

    try {
        const res = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/api/auth/isAuthenticated/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookie.get('csrftoken'),
                'Authorization': `${token}`
            }
        });

        if (res.data.success) {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payloadOne: true
            });
        } else if (res.data.error || res.data.isAuthenticated === 'error') {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payloadOne: null
            });
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payloadOne: null
            });
        }

    } catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payloadOne: null
        })
    };
};

export default checkAuthentication;