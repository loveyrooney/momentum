import React from 'react';
import styled from 'styled-components';

const MyInput0 = styled.input`
    width: 80px;
    position: absolute;
    left: 15%;
    top: 20%;
`
const MyInput1 = styled.input`
    width: 80px;
    position: absolute;
    left: 55%;
    top: 20%;
`
const MyInput2 = styled.input`
    width: 80px;
    position: absolute;
    left: 5%;
    top: 45%;
`
const MyInput3 = styled.input`
    width: 80px;
    position: absolute;
    left: 65%;
    top: 45%;
`
const MyInput4 = styled.input`
    width: 80px;
    position: absolute;
    left: 15%;
    top: 75%;
`
const MyInput5 = styled.input`
    width: 80px;
    position: absolute;
    left: 55%;
    top: 75%;
`
const MyPieInput6 = () => {
    return (
        <>
            <div className='round pie6'>
                <MyInput0/>
                <MyInput1/>
                <MyInput2/>
                <MyInput3/>
                <MyInput4/>
                <MyInput5/>
            </div>
        </>
        
    );
};

export default MyPieInput6;