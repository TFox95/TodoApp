import { combineReducers } from "redux";
import auth from "./authReducer";
import category from "./categoryReducer";

export default combineReducers({
    auth,
    category,
    
});