import {API_START, API_SUCCESS, API_FAILURE, ADD_SMURF, REMOVE_SMURF} from "../actions";

const initialState = {
    isLoading: false,
    smurfs: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case API_START:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case API_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            };
        case API_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};