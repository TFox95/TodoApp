import axios from "axios";
import {
    AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL
} from "../types";
import Cookies from "js-cookie";

const CheckAuth = (token) => async dispatch => {

    try {
        const res = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/api/auth/isAuthenticated/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': `${token}`
            }
        });
        const Res = res.data.success;

        if (Res) {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: Res,
            });
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: null,
            });
        };
        
    } catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: null,
        });
    };
};

export default CheckAuth;