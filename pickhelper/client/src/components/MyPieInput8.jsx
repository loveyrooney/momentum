import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 60px;
    position: absolute;
    left: 25%;
    top: 15%;
`
const MyInput1 = styled.input`
    width: 60px;
    position: absolute;
    left: 53%;
    top: 15%;
`
const MyInput2 = styled.input`
    width: 60px;
    position: absolute;
    left: 7%;
    top: 35%;
`
const MyInput3 = styled.input`
    width: 60px;
    position: absolute;
    left: 70%;
    top: 35%;
`
const MyInput4 = styled.input`
    width: 60px;
    position: absolute;
    left: 7%;
    top: 55%;
`
const MyInput5 = styled.input`
    width: 60px;
    position: absolute;
    left: 70%;
    top: 55%;
`
const MyInput6 = styled.input`
    width: 60px;
    position: absolute;
    left: 25%;
    top: 77%;
`
const MyInput7 = styled.input`
    width: 60px;
    position: absolute;
    left: 52%;
    top: 77%;
`
const MyPieInput8 = () => {
    return (
        <>
            <div className='round pie8'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
                <MyInput3/>
                <MyInput4/>
                <MyInput5/>
                <MyInput6/>
                <MyInput7/>
            </div>
        </>
        
    );
};

export default MyPieInput8;