import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 10%;
    top: 25%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 60%;
    top: 25%;
`
const MyInput2 = styled.input`
    width: 80px;
    position: absolute;
    left: 10%;
    top: 65%;
`
const MyInput3 = styled.input`
    width: 80px;
    position: absolute;
    left: 60%;
    top: 65%;
`
const MyPieInput4 = () => {
    return (
        <>
            <div className='round pie4'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
                <MyInput3/>
            </div>
        </>
        
    );
};

export default MyPieInput4;