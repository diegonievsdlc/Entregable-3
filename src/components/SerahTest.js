import axios from 'axios';
import React, { useEffect } from 'react';

const SerahTest = () => {
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/?name=Citadel&of&Ricks')
            .then(res => console.log(res.data.results[0]) )
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default SerahTest;