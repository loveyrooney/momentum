import React, { useRef } from 'react';
import styled from 'styled-components';
import '../css/roulette.css';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 35%;
    top: 25%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 35%;
    top: 65%;
`
const MyPieInput2 = () => {
    function rotate(){
        
    }
    return (
        <>
            <div className='round pie2'>
                <MyInput0/>
                <MyInput1/>
            </div>
            <br/>
            <button type="button" onClick={rotate}>돌리기!</button>
        </>
        
    );
};

export default MyPieInput2;