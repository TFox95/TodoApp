import {
    LOAD_TASKS_SUCCESS,
    LOAD_TASKS_FAIL
} from "../actions/types";

const initialState = {
    tasks: null
};

function task (state = initialState, action) {
    const { type, payload} = action;

    switch (type) {
        case LOAD_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload,
            }
        case LOAD_TASKS_FAIL:
            return {
                ...state,
                tasks: null,
            }
        default:
            return state
    }
}

export default task;