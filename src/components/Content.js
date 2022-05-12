import React from 'react';
import Card from './Card';

const Content = ({name, type, dimension, population, residentEndPoint}) => {
    return (
        <div className='main-content'>
            <div className='location-information'>
                <h2>{name}</h2>
                <ul>
                    <li><span>Type: </span>{type}</li>
                    <li><span>Dimension: </span>{dimension}</li>
                    <li><span>Population: </span>{population}</li>
                </ul>
            </div>
            <div className='card-sealer'>
                {
                    residentEndPoint.length <= 0 ? <h1 className='message'>There are no inhabitants in these lands</h1> : (
                            residentEndPoint.map(endPoint => (
                                <Card link={endPoint} key={endPoint}/>
                            ))
                    )
                }
            </div>
        </div>
    );
};

export default Content;