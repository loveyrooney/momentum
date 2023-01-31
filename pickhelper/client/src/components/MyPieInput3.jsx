import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 60%;
    top: 35%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 10%;
    top: 35%;
`
const MyInput2 = styled.input`
    width: 80px;
    position: absolute;
    left: 35%;
    top: 75%;
`
const MyPieInput3 = () => {
    return (
        <>
            <div className='round pie3'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
            </div>
        </>
        
    );
};

export default MyPieInput3;