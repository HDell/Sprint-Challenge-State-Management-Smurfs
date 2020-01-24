import React from "react";
import "./App.css";

import { connect } from 'react-redux'; // HOC
import Loader from 'react-loader-spinner';

import { getSmurfs, addSmurf, removeSmurf } from '../actions';

const App = (props) => {
    return (
        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs, addSmurf, removeSmurf}
)(App);
