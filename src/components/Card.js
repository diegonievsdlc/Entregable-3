import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = ({link}) => {
    const [info, setInfo] = useState()
    
    useEffect(() => {
        const uwu = link
        axios.get(uwu)
            .then(res => setInfo(res.data))
    }, [link])

    return (
        <div className="card">
            <img src={info?.image} alt="Img" />
            <div className="info">
                <h2>{info?.name}</h2>
                <p>{info?.status} - {info?.species}</p>
                <dl>
                    <dt>Last known location:</dt>
                    <dd>{info?.origin.name}</dd>
                    <dt>Episodes where appear:</dt>
                    <dd>{info?.episode.length}</dd>
                </dl>
            </div>
        </div>
    );
};

export default Card;