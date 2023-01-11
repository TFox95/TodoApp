import { LOAD_TASKS_SUCCESS, LOAD_TASKS_FAIL } from "../types";
import axios from "axios";
import Cookies from "js-cookies";

export const RetrieveTask = (token, pk = null) => async dispatch => {

    if (!pk) {
        try {

            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/todo/`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.getItem('csrftoken'),
                    'Authorization': `${token}`
                }
            });

            console.log('status', response.status);
            const Res = response.data.success;
            const fetchedData = {Res}
            console.log(fetchedData.Res.length)

            if (!fetchedData.Res.length) {
                console.log('yup')
                dispatch({
                    type: LOAD_TASKS_FAIL,
                    payload: null
                });
            } else {
                console.log("nope")
                if (response) {
                    dispatch({
                        type: LOAD_TASKS_SUCCESS,
                        payload: response.data.success
                    });

                } else {
                    dispatch({
                        type: LOAD_TASKS_FAIL,
                        payload: null
                    });
                }
            }

        } catch (err) {
            console.error(err);
            dispatch({
                type: LOAD_TASKS_FAIL,
                payload: null
            });
        }

    } else {
        try {
            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/todo/${pk}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.getItem('csrftoken'),
                    'Authorization': `${token}`
                }
            });

            if (response) {
                dispatch({
                    type: LOAD_TASKS_SUCCESS,
                    payload: response.data.success
                });

            } else {
                dispatch({
                    type: LOAD_TASKS_FAIL,
                    payload: null
                });
            }

        } catch (err) {
            console.error(err);
            dispatch({
                type: LOAD_TASKS_FAIL,
                payload: null
            });
        }
    }
}
