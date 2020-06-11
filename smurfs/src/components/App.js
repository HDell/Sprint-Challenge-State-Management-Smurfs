import React, {useState} from "react";
import "./App.css";

import SmurfList from './SmurfList';

import { connect } from 'react-redux'; // HOC
import Loader from 'react-loader-spinner';

import { getSmurfs, addSmurf, updateSmurf, removeSmurf } from '../actions';

const App = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [height, setHeight] = useState(null);
    const [id, setId] = useState(null);
    const [id2, setId2] = useState(null);

    var btnText = 'Display Smurfs';

    const handleChanges = e => {
        // update state with each keystroke
        setName(e.target.value);
    };

    const handleChanges2 = e => {
        // update state with each keystroke
        setAge(e.target.value);
    };

    const handleChanges3 = e => {
        // update state with each keystroke
        setHeight(e.target.value);
    };

    const handleChanges4 = e => {
        // update state with each keystroke
        setId(e.target.value);
    };

    const handleChanges5 = e => {
        // update state with each keystroke
        setId2(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setName('');
        setAge(null);
        setHeight(null);
    };

    return (
        <div className="App">
            <button onClick={props.getSmurfs}>{btnText}</button>
            {props.isLoading && (<Loader color="green" height={50} width={50}/>)}
            {props.smurfs && !props.isLoading && <SmurfList state={{smurfs: props.smurfs, isLoading: props.isLoading, error: props.error}} removeSmurf={props.removeSmurf}/>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Smurf's Name"
                    value={name}
                    onChange={handleChanges}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Smurf's Age"
                    value={age}
                    onChange={handleChanges2}
                />
                <input
                    type="number"
                    name="height"
                    placeholder="Smurf's Height (cm)"
                    value={height}
                    onChange={handleChanges3}
                />
                <button onClick={() => props.addSmurf(
                        {
                            name: name,
                            age: Math.abs(age),
                            height: Math.abs(height).toString() + 'cm'
                        }
                    )
                }>Add Smurf</button>
            </form>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="ID (zero indexed)"
                    value={id}
                    onChange={handleChanges4}
                />
                <button onClick={() => {

                    if (name && age && height) {
                        return props.updateSmurf(
                            {
                                name: name,
                                age: Math.abs(age),
                                height: Math.abs(height).toString() + 'cm',
                                id: Math.abs(id)
                            }
                        )
                    } else if (name && age) {
                        return props.updateSmurf(
                            {
                                name: name,
                                age: Math.abs(age),
                                id: Math.abs(id)
                            }
                        )
                    } else if (name && height) {
                        return props.updateSmurf(
                            {
                                name: name,
                                height: Math.abs(height).toString() + 'cm',
                                id: Math.abs(id)
                            }
                        )
                    } else if (age && height) {
                        return props.updateSmurf(
                            {
                                age: Math.abs(age),
                                height: Math.abs(height).toString() + 'cm',
                                id: Math.abs(id)
                            }
                        )
                    } else if (name) {
                        return props.updateSmurf(
                            {
                                name: name,
                                id: Math.abs(id)
                            }
                        )
                    } else if (age) {
                        return props.updateSmurf(
                            {
                                age: Math.abs(age),
                                id: Math.abs(id)
                            }
                        )
                    } else { //height
                        return props.updateSmurf(
                            {
                                height: Math.abs(height).toString() + 'cm',
                                id: Math.abs(id)
                            }
                        )
                    }
                }}>Update Smurf</button>
            </form>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id2"
                    placeholder="ID (zero indexed)"
                    value={id2}
                    onChange={handleChanges5}
                />
                <button onClick={() => props.removeSmurf(Math.abs(id2))}>
                    Delete Smurf
                </button>
            </form>
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
    {getSmurfs, addSmurf, updateSmurf, removeSmurf}
)(App);
