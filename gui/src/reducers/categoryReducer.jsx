import {
    CATEGORY_SUCCESS,
    CATEGORY_FAIL
} from "../actions/types";

const initialState = {
    categories: null,
    priorities: null
};

function category (state = initialState, action) {
    const { type, payloadOne, payloadTwo} = action;

    switch (type) {
        case CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payloadOne,
                priorities: payloadTwo
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