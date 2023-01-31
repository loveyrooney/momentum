import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 17%;
    top: 15%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 52%;
    top: 15%;
`
const MyInput2 = styled.input`
    width: 80px;
    position: absolute;
    left: 5%;
    top: 40%;
`
const MyInput3 = styled.input`
    width: 80px;
    position: absolute;
    left: 65%;
    top: 40%;
`
const MyInput4 = styled.input`
    width: 80px;
    position: absolute;
    left: 10%;
    top: 65%;
`
const MyInput5 = styled.input`
    width: 80px;
    position: absolute;
    left: 65%;
    top: 65%;
`
const MyInput6 = styled.input`
    width: 80px;
    position: absolute;
    left: 37%;
    top: 85%;
`
const MyPieInput7 = () => {
    return (
        <>
            <div className='round pie7'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
                <MyInput3/>
                <MyInput4/>
                <MyInput5/>
                <MyInput6/>
            </div>
        </>
        
    );
};

export default MyPieInput7;