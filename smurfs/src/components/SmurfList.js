import React from 'react';

import SmurfCard from './SmurfCard';

const SmurfList = props => {
    return (
        <div className="container">
            {props.state.smurfs.map(item => (
                <SmurfCard key={item.id} smurf={item} removeSmurf={props.removeSmurf} />
            ))}
        </div>
    );
};

export default SmurfList;
