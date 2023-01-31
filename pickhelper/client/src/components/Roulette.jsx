import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../css/roulette.css';
import MyPieInput2 from './MyPieInput2';
import MyPieInput3 from './MyPieInput3';
import MyPieInput4 from './MyPieInput4';
import MyPieInput5 from './MyPieInput5';
import MyPieInput6 from './MyPieInput6';
import MyPieInput7 from './MyPieInput7';
import MyPieInput8 from './MyPieInput8';

const Roulette = () => {
    const headinfo = useSelector((state)=>state.admin.roulette);
    const pieCountRef = useRef();
    const pieboardRef = useRef();
    // const rouletteBoardRef = useRef();
    // const [ countArr, setCountArr ] = useState([]);
    const [view, setView] = useState('d-none');

    function roulettemake() {
        let piecount = parseInt(pieCountRef.current.value);
        console.log(piecount);
        if(piecount < 2 || piecount >8) {
            alert('파이 개수를 다시 지정하세요');
            pieCountRef.current.value='';
        } else { 
            if (piecount === 2) {
                setView('pie2');
            } else if (piecount === 3) {
                setView('pie3');
            } else if (piecount === 4) {
                setView('pie4');
            } else if (piecount === 5) {
                setView('pie5'); 
            } else if (piecount === 6) {
                setView('pie6');
            } else if (piecount === 7) {
                setView('pie7');
            } else { setView('pie8'); }
            pieboardRef.current.className = 'pieboard';    
        } 
    }

        // else {
        //     return <MyPieInput8/>
        //     // rouletteBoardRef.current.className = `round pie${piecount}`;
        //     // for (let i=1; i<piecount+1; i++) {
        //     //     countArr.push(i);
        //     // }
        //     // console.log(countArr);
        //     // let countArr_copy = [...countArr];
        //     // setCountArr(countArr_copy);
        //     // pieboardRef.current.className = 'pieboard';
        // }  

    function reload() {
        // setCountArr([]);
        pieboardRef.current.className = 'd-none';

    }
    
    return (
        <>
            <Header obj={headinfo}/>
            <div className='pieset'>파이 개수
                <input ref={pieCountRef} type="number" name="piecount" min="2" max="8" placeholder="2~8개 까지 가능해요!"/>
                <button type="button" onClick={roulettemake}>만들기</button>
            </div>
            <div ref={pieboardRef} className='pieboard d-none'>
                {/* <div ref={rouletteBoardRef} className='round'>
                    {countArr.map((el,index)=><input key={index} length={el.length}/>)}
                </div> */}
                { view === 'pie2' && <MyPieInput2/>}
                { view === 'pie3' && <MyPieInput3/>}
                { view === 'pie4' && <MyPieInput4/>}
                { view === 'pie5' && <MyPieInput5/>}
                { view === 'pie6' && <MyPieInput6/>}
                { view === 'pie7' && <MyPieInput7/>}
                { view === 'pie8' && <MyPieInput8/>}
                <br/>
                <button type="button" onClick={reload}>다시하기</button>
            </div>
            <br/>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </>
    );
}
    

export default Roulette;