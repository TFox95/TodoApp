import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

export const registerAPI = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({ username, password, re_password});

    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth/register/`,
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
    }
}