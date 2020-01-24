import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_START});
    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res);
            dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: FETCH_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};

export const addSmurf = (newSmurf) => {
    return { type: ADD_SMURF, payload: newSmurf };
};

export const removeSmurf = (smurfID) => {
    return { type: REMOVE_SMURF, payload: smurfID };
};
