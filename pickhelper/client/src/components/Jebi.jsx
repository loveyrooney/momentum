import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../css/jebi.css';
import { useRef } from 'react';
import { useState } from 'react';

const Jebi = () => {
    const headinfo = useSelector((state)=>state.admin.jebi);
    const countRef = useRef(); 
    const contentRef = useRef();
    const customRef = useRef();
    const formRef = useRef();
    const jebiboardRef = useRef();
    function count() {
        let countArr = [];
        for (let i=2; i<21; i++) {
            countArr.push(<option value={i}>{i}개</option>)
        }
        return countArr;
    }

    const [boardArr, setBoardArr] = useState([]); 
    function jebimake() {
        let countVal = parseInt(countRef.current.value);
        let contentVal = contentRef.current.value;
        let customArr = customRef.current.value.split(',');
        if(countVal === customArr.length && contentVal !== 'custom')
          alert('제비 유형이 커스텀이 아닙니다');
        else if(customArr.length !== countVal && contentVal === 'custom')
          alert('커스텀 설정이 정확하지 않습니다'); 
        else {
            if(contentVal === 'number') {
                for (let k=1; k<countVal+1; k++) {
                    boardArr.push(k);
                }
                boardArr.sort(() => Math.random() - 0.5);
                console.log("num:",boardArr);
                let numArr = [...boardArr];
                setBoardArr(numArr);
            } else if(contentVal === 'king') {
                for (let l=1; l<countVal; l++) {
                    boardArr.push('국민');
                }
                boardArr.push('왕');
                boardArr.sort(() => Math.random() - 0.5);
                let kingArr = [...boardArr];
                setBoardArr(kingArr);
            } else {
                customArr.sort(() => Math.random() - 0.5);
                setBoardArr(customArr.slice()); 
            } 
            formRef.current.className = 'd-none'; 
            jebiboardRef.current.className = 'jebiboard';
        }
    }
    function reload() {
        setBoardArr([]);
        formRef.current.className = ''
        jebiboardRef.current.className = 'd-none';
    }
    return (
        <>
           <Header obj={headinfo}/>
            <form ref={formRef}>
                <span className="select">제비 개수</span> 
                    <select name="count" ref={countRef}>
                        <option value="">뽑을 제비의 개수를 선택하세요</option>
                        {count()}          
                    </select>  
                <span className="select">제비 유형</span>
                    <select name="content" ref={contentRef}>
                        <option value="">제비의 유형을 선택하세요</option>
                        <option value="number" selected>번호 매기기</option>
                        <option value="king">왕 뽑기</option>
                        <option value="custom">커스텀 설정</option>
                    </select>   
                <fieldset>
                    <legend>커스텀 설정</legend>
                    <span>제비 안에 들어갈 내용을 적어주세요.</span><br/>
                    <span>제비의 개수와 들어갈 내용의 개수가 같아야 해요!👌</span><br/>
                    <input ref={customRef} type="text" name="custom" placeholder="ex) 마피아, 시민, 경찰"/>
                </fieldset><br/>
                <button className='jebibtn' type="button" onClick={jebimake}>만들기</button>
            </form>
            <div className='d-none' ref={jebiboardRef}>
              {boardArr.length<1 ? "blank" : boardArr.map((el,index)=><p onClick={(e)=>{e.target.children[0].className = '';}} key={index}><span className="d-none">{el}</span></p>)}
              <br/>
              <button className='jebibtn' onClick={reload}>다시 하기</button>            
            </div>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default Jebi;