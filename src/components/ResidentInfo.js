import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({link}) => {
    const [info, setInfo] = useState()
    useEffect(() => {
        axios.get(link)
            .then(res => setInfo(res.data))
    }, [link])
    return (
        <div className="card">
            <img src={info?.image} alt="Img" />
            <div className="info">
                <h2>{info?.name}</h2>
                <div className="status">
                    <span className={info?.status === 'Alive' ? 'alive' : 'death'}></span>
                    <p>{info?.status} - {info?.species}</p>
                </div>
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

export default ResidentInfo;