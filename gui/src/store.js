import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authStateLoader } from "./actions/PersistState";
import rootReducer from "./reducers/indexReducer";

const authInitialState = new authStateLoader();
console.log(authInitialState.loadState());

const middleware = [thunk];

const store = createStore(
    rootReducer,
    authInitialState.loadState(),
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;