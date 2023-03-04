import { useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../css/tournament.css';

const Tournament = () => {
    const headinfo = useSelector((state)=>state.admin.tournament);
    const sixteenRef = useRef();
    const eightRef = useRef();
    const candidateRef = useRef();
    
    function start() {
        if(!sixteenRef.current.checked && !eightRef.current.checked) alert("시작 대진 여부를 체크해 주세요");
        let candidateArr = candidateRef.current.value.split(',');
        let sixteen = sixteenRef.current.id;
        let eight = eightRef.current.id;
        console.log(sixteenRef.current.checked);
    }
    return (
        <div>
            <Header obj={headinfo}/>
            <form>
                <input className="tournaInput" ref={sixteenRef} type="radio" name="check" id="16"/><label htmlFor="16">16강</label>
                <input className="tournaInput" ref={eightRef} type="radio" name="check" id="8"/><label htmlFor="8">8강</label>
                <br/>
                <span>후보 리스트</span>
                <br/>
                <textarea ref={candidateRef}></textarea>
                <br/>
                <button className='dunglebtn' type="button" onClick={start}>시작!</button>
            </form>
            <div className='d-none'>
                <div className='topTeam'>잉글랜드</div>
                <h3>VS</h3>
                <div className='bottomTeam'>대한민국</div>
            </div>
        </div>
    );
};

export default Tournament;