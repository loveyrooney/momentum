import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import '../css/roulette.css';
import Board from './Board';
import { keyframe } from '../store/pieprops';

const Roulette = () => {
    const headinfo = useSelector((state)=>state.admin.roulette);
    const pie = useSelector((state)=>state.pieprops);
    const dispatch = useDispatch();
    const pieCountRef = useRef();
    const pieboardRef = useRef();
    const formRef = useRef();
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
            formRef.current.className = 'd-none';  
        } 
    }

    function rotate() {
        dispatch(keyframe({
            pieChannel: view,
            stopDeg:`${360 + Math.floor(Math.random()*10000)}deg`, 
        }));
        console.log(pie);
    }
    function reload() {
        dispatch(keyframe({
            pieChannel: view,
            stopDeg:'0deg', 
        }));
        pieboardRef.current.className = 'd-none';

    }
        
    return (
        <>
            <Header obj={headinfo}/>
            <div ref={formRef} className='pieset'>
                <span>파이 개수</span>
                <input ref={pieCountRef} type="number" name="piecount" min="2" max="8" placeholder="2~8개 까지 가능"/>
                <button type="button" onClick={roulettemake}>만들기</button>
            </div>
            <div ref={pieboardRef} className='pieboard d-none'>
                { view === 'pie2' || pie.pie2.stopDeg !== '0deg' ? <Board pieCount={pie.pie2.pieCount} pieColor={pie.pie2.pieColor} startDeg={pie.pie2.startDeg} stopDeg={pie.pie2.stopDeg} left={pie.pie2.left} top={pie.pie2.top}/> : ''}
                { view === 'pie3' || pie.pie3.stopDeg !== '0deg' ? <Board pieCount={pie.pie3.pieCount} pieColor={pie.pie3.pieColor} startDeg={pie.pie3.startDeg} stopDeg={pie.pie3.stopDeg} left={pie.pie3.left} top={pie.pie3.top}/> : ''}
                { view === 'pie4' || pie.pie4.stopDeg !== '0deg' ? <Board pieCount={pie.pie4.pieCount} pieColor={pie.pie4.pieColor} startDeg={pie.pie4.startDeg} stopDeg={pie.pie4.stopDeg} left={pie.pie4.left} top={pie.pie4.top}/> : ''}
                { view === 'pie5' || pie.pie5.stopDeg !== '0deg' ? <Board pieCount={pie.pie5.pieCount} pieColor={pie.pie5.pieColor} startDeg={pie.pie5.startDeg} stopDeg={pie.pie5.stopDeg} left={pie.pie5.left} top={pie.pie5.top}/> : ''}
                { view === 'pie6' || pie.pie6.stopDeg !== '0deg' ? <Board pieCount={pie.pie6.pieCount} pieColor={pie.pie6.pieColor} startDeg={pie.pie6.startDeg} stopDeg={pie.pie6.stopDeg} left={pie.pie6.left} top={pie.pie6.top}/> : ''}
                { view === 'pie7' || pie.pie7.stopDeg !== '0deg' ? <Board pieCount={pie.pie7.pieCount} pieColor={pie.pie7.pieColor} startDeg={pie.pie7.startDeg} stopDeg={pie.pie7.stopDeg} left={pie.pie7.left} top={pie.pie7.top}/> : ''}
                { view === 'pie8' || pie.pie8.stopDeg !== '0deg' ? <Board pieCount={pie.pie8.pieCount} pieColor={pie.pie8.pieColor} startDeg={pie.pie8.startDeg} stopDeg={pie.pie8.stopDeg} left={pie.pie8.left} top={pie.pie8.top}/> : ''}
                <br/>
                {view === 'pie2' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie3' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie4' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie5' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie6' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie7' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                {view === 'pie8' && <button className="piebtn" type="button" onClick={rotate}>돌리기</button>}
                <button className="piebtn" type="button" onClick={reload}>다시하기</button>
            </div>
            <h3><a href="/">다른 게임 하러 가기</a></h3>
            <footer><p>programed by rooney</p></footer>
        </>
    );
}
    

export default Roulette;