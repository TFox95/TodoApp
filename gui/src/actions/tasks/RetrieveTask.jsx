import axios from "axios";
import Cookies from "js-cookies";

export const RetrieveTask = async (token, pk = null) => {

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

        const res = await response.data.success;

        return res;

    } catch (err) {
        console.error(err);
    }

}
