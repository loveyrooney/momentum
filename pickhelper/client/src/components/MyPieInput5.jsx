import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 15%;
    top: 25%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 55%;
    top: 25%;
`
const MyInput2 = styled.input`
    width: 80px;
    position: absolute;
    left: 5%;
    top: 55%;
`
const MyInput3 = styled.input`
    width: 80px;
    position: absolute;
    left: 65%;
    top: 55%;
`
const MyInput4 = styled.input`
    width: 80px;
    position: absolute;
    left: 35%;
    top: 75%;
`
const MyPieInput5 = () => {
    return (
        <>
            <div className='round pie5'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
                <MyInput3/>
                <MyInput4/>
            </div>
        </>
        
    );
};

export default MyPieInput5;