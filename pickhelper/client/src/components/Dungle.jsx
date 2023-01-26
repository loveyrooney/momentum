import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Dungle = () => {
    const headinfo = useSelector((state)=>state.admin.dungle);
    return (
        <div>
            <Header obj={headinfo}/>
        </div>
    );
};

export default Dungle;