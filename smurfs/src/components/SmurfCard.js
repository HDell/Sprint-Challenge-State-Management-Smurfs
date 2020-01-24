import React from 'react';

const SmurfCard = props => {

    return (
        <div className="card">
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
        </div>
    );
};

export default SmurfCard;

