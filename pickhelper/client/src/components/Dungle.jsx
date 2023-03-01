import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { divide, extra } from '../store/dungle';
import '../css/dungle.css';

const Dungle = () => {
    const headinfo = useSelector((state)=>state.admin.dungle);
    const [boardArr, setBoardArr] = useState([]);
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
    const extragroup = async () => {
        const result = await extra({
            extraArr : boardArr
        });
        console.log('extra', result.payload);
    }
    function reload() {

    }
    return (
        <div>
            <Header obj={headinfo}/>
            <form>
                <span>총 인원</span>
                <input ref={totalRef} type="number" name="piecount" min="10" max="100" placeholder=" 10~100명 까지 가능"/>
                <br/>
                <span>그룹 수</span>
                <input ref={groupRef} type="number" name="piecount" min="2" max="10" placeholder=" 2~10그룹 까지 가능"/>
                <br/>
                <button className='dunglebtn' type="button" onClick={grouping}>배정하기</button>
            </form>
            <div className='d-none' ref={dungleboardRef}>
              {boardArr.length<1 ? "blank" : boardArr.map((el,index)=><p key={index} id={index == boardArr.length-1 ? 'lastP' : ''}><span>{index+1}그룹 : {el.toString()}</span></p>)}
              <button className='dunglebtn' onClick={extragroup}>나머지 배정</button>            
            </div>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </div>
    );
};

export default Dungle;