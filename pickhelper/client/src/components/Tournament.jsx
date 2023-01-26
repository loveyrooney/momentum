import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Tournament = () => {
    const headinfo = useSelector((state)=>state.admin.tournament);
    return (
        <div>
            <Header obj={headinfo}/>
        </div>
    );
};

export default Tournament;