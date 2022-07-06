import { combineReducers } from "redux";
import auth from "./authReducer";
import category from "./categoryReducer";
import task from "./taskReducer";

export default combineReducers({
    auth,
    category,
    task,
});