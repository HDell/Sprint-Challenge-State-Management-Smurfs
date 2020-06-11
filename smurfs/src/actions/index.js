import axios from 'axios';

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const getSmurfs = () => dispatch => {
    dispatch({type: API_START});
    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res);
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: API_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};

export const addSmurf = (newSmurf) => dispatch => {
    dispatch({type: API_START});
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then((res) => {
            console.log(res);
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: API_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};

export const updateSmurf = (updatedSmurf) => dispatch => {
    dispatch({type: API_START});
    axios.put('http://localhost:3333/smurfs/'+updatedSmurf.id, updatedSmurf)
        .then((res) => {
            console.log(res);
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: API_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};

export const removeSmurf = (smurfID) => dispatch => {
    dispatch({type: API_START});
    axios.delete('http://localhost:3333/smurfs/'+smurfID)
        .then((res) => {
            console.log(res);
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: API_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};
