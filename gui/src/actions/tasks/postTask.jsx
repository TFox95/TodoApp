import axios from "axios";
import Cookies from "js-cookies";

export const PostTask = (token, title, description, dueDate, priority, primaryCategory, completed) => async dispatch => {

    if (dueDate === "") {
        try {
            const res = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/api/todo/`,
                data: { title, description, priority, primaryCategory, completed },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.getItem('csrftoken'),
                    'Authorization': `${token}`
                }
            });
    
            console.log('status', res.status);
    
        } catch (err) {
            console.error(err);
        }
    } else {
        try {
            const res = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/api/todo/`,
                data: { title, description, dueDate, priority, primaryCategory, completed },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.getItem('csrftoken'),
                    'Authorization': `${token}`
                }
            });
    
            console.log('status', res.status);
    
        } catch (err) {
            console.error(err);
        }
    }
    
};

export default PostTask;


