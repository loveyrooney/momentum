import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Roulette = () => {
    const headinfo = useSelector((state)=>state.admin.roulette);
    return (
        <div>
            <Header obj={headinfo}/>
        </div>
    );
};

export default Roulette;