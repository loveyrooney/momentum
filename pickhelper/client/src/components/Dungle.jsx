import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { divide, extra } from '../store/dungle';
import '../css/dungle.css';

const Dungle = () => {
    const headinfo = useSelector((state)=>state.admin.dungle);
    const [boardArr, setBoardArr] = useState({board:[],type:0});
    const totalRef = useRef();
    const groupRef = useRef();
    const dungleboardRef = useRef();


    const grouping = async () => {
        const result = await divide({
            total : totalRef.current.value,
            group : groupRef.current.value
        });
        console.log('divide',result.payload);
        setBoardArr(result.payload);
        dungleboardRef.current.className = 'dungleboard';
    }
    const extraGroup = async () => {
        const result = await extra({
            firstArr : boardArr
        });
        console.log('extra', result.payload);
        setBoardArr(result.payload);
    }
    function reload() { 
        totalRef.current.value = '';
        groupRef.current.value = '';
        dungleboardRef.current.className = 'd-none';
        setBoardArr({board:[],type:0});
    }
    return (
        <div>
            <Header obj={headinfo}/>
            <form>
                <span>총 인원</span>
                <input ref={totalRef} type="number" min="10" max="100" placeholder=" 10~100명 까지 가능"/>
                <br/>
                <span>그룹 수</span>
                <input ref={groupRef} type="number" min="2" max="10" placeholder=" 2~10그룹 까지 가능"/>
                <br/>
                <button className='dunglebtn' type="button" onClick={grouping}>배정하기</button>
            </form>
            <div className='d-none' ref={dungleboardRef}>
              {boardArr.board.length<1 ? "blank" : boardArr.type == 1 ? boardArr.board.map((el,index)=><p key={index} id={index+1 == boardArr.board.length ? 'lastP' : ''}><span>{index+1}그룹</span><br/><span>{el.join(" ")}</span></p>) : boardArr.board.map((el,index)=><p key={index}><span>{index+1}그룹</span><br/><span>{el.join(" ")}</span></p>)}
              {boardArr.type == 1 ? <button className='dunglebtn' onClick={extraGroup}>나머지 배정</button> : <button className='dunglebtn' onClick={reload}>다시하기</button>}            
            </div>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </div>
    );
};

export default Dungle;