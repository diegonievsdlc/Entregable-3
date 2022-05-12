import React from 'react';

const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <div className='browser'>
                <h1>Rick and Morty</h1>
                <div className="search">
                    <input type="text" placeholder='Search for' required/>
                    <div className="btn">
                        <i className='bx bx-search-alt-2'></i>
                    </div>
                </div>
                <div className='settings'>
                    <i className='bx bx-volume-full' ></i>
                    <i className='bx bx-sun' ></i>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;