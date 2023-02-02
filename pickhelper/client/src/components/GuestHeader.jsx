import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Mynav= styled.nav`
    position:relative;
    padding: 2%;
    height: 20%;
    
`
const Myul = styled.ul`
    padding: 0;
    display: block;
    list-style: none;
    background-color: rgba(97, 127, 224, 0.765);
    border-radius: 20px;
`
const Myli = styled.li`
    display: inline-block;
    list-style: none;
    padding: 3%;
`

const GuestHeader = () => {
    return (
        <>
            <header>
                <h1>Pick Helper</h1>
                <h2>이런 상황에서 이용했어요😍</h2>
            </header>
            <Mynav>
                <Myul>
                  <Myli><Link to='/guest/jebicoment'>제비뽑기</Link></Myli> 
                  <Myli><Link to='/guest/roulettecoment'>룰렛돌리기</Link></Myli> 
                  <Myli><Link to='/guest/dunglecoment'>둥글게둥글게</Link></Myli> 
                  <Myli><Link to='/guest/tournamentcoment'>월드컵</Link></Myli>  
                </Myul>
            </Mynav>
        </>
    );
};

export default GuestHeader;