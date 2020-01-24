import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, REMOVE_SMURF} from "../actions";

const initialState = {
    isLoading: false,
    smurfs: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                beers: action.payload,
                isLoading: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            };
        case REMOVE_SMURF:
                return {
                    ...state,
                    smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
                };
        default:
            return state;
    }
};