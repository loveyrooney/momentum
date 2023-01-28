import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Roulette = () => {
    const headinfo = useSelector((state)=>state.admin.roulette);
    const pieCountRef = useRef();
    const rouletteBoardRef = useRef();
    const pieboardRef = useRef();
    const [ countArr, setCountArr ] = useState([]);
    function roulettemake() {
        let piecount = parseInt(pieCountRef.current.value);
        console.log(piecount);
        if(piecount < 2 || piecount >8) {
            alert('파이 개수를 다시 지정하세요');
            pieCountRef.current.value='';
        }
        else {
            rouletteBoardRef.current.className = `round ${piecount}`;
            for (let i=1; i<piecount+1; i++) {
                countArr.push(i);
            }
            console.log(countArr);
            let countArr_copy = [...countArr];
            setCountArr(countArr_copy);
            pieboardRef.current.className = 'pieboard';
        }  
    }
    return (
        <>
            <Header obj={headinfo}/>
            <div className='pieset'>파이 개수
                <input ref={pieCountRef} type="number" name="piecount" min="2" max="8" placeholder="2~8개 까지 가능해요!"/>
                <button type="button" onClick={roulettemake}>만들기</button>
            </div>
            <div ref={pieboardRef} className='pieboard d-none'>
                <div ref={rouletteBoardRef} className='round'>
                    {countArr.map((index)=><input key={index} type="text"/>)}
                </div>
                <button type="button">돌리기!</button>
                <button type="button">다시하기</button>
            </div>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default Roulette;