import React from 'react';

const Location = ({name, type, dimension, population}) => {
    return (
        <div className='location-information'>
            <h2>{name}</h2>
            <ul>
                <li><span>Type: </span>{type}</li>
                <li><span>Dimension: </span>{dimension}</li>
                <li><span>Population: </span>{population}</li>
            </ul>
        </div>
    );
};

export default Location;