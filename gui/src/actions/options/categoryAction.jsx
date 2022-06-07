import axios from "axios";
import Cookies from "js-cookies";
import { CATEGORY_FAIL, CATEGORY_SUCCESS } from "../types";

const CategoryApi = (token) => async dispatch => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/api/todo/category/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.getItem('csrftoken'),
                'Authorization': `${token}`
            }

        });
        let res = response.data.success;

        if (res) {
            dispatch({
                type: CATEGORY_SUCCESS,
                payload: res
            });
        } else {
            dispatch({
                type: CATEGORY_FAIL
            })
        }
    } catch (err) {
        dispatch({
            type: CATEGORY_FAIL
        });
    }
};

export default CategoryApi