import {
    CATEGORY_SUCCESS,
    CATEGORY_FAIL
} from "../actions/types";

const initialState = {
    categories: null,
    priorities: null
};

function category (state = initialState, action) {
    const { type, payload} = action;

    switch (type) {
        case CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payload.category,
                priorities: payload.priority
            }
        case CATEGORY_FAIL:
            return {
                ...state,
                categories: null,
                priorities: null
            }
        default:
            return state
    }
}

export default category;