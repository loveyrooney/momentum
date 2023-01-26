import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../css/jebi.css';
import { useRef } from 'react';

const Jebi = () => {
    const headinfo = useSelector((state)=>state.admin.jebi);
    const countRef = useRef(); 
    const contentRef = useRef();
    const customRef = useRef();
    function count() {
        let countarr = [];
        for (let i=2; i<21; i++) {
            countarr.push(<option value={i}>{i}개</option>)
        }
        return countarr;
    }
    function jebimake() {
        let countVal = parseInt(countRef.current.value);
        let contentVal = contentRef.current.value;
        let customArr = customRef.current.value.split(',');
        if(countVal == customArr.length && contentVal !== 'custom')
          alert('제비 유형이 커스텀이 아닙니다');
        else if(customArr.length !== countVal && contentVal == 'custom')
          alert('커스텀 설정이 정확하지 않습니다');
        else {
            if(contentVal == 'number') {
                let numArr = [];
                for (let k=1; k<countVal+1; k++) {
                    numArr.push(k);
                }
                numArr.sort(() => Math.random() - 0.5);
                console.log(numArr);
                jebiboard(numArr);
            } else if(contentVal == 'king') {
                let kingArr = [];
                for (let l=1; l<countVal; l++) {
                    kingArr.push('국민');
                }
                kingArr.push('왕');
                kingArr.sort(() => Math.random() - 0.5);
                console.log('kingarr:',kingArr);
                jebiboard(kingArr);
            } else {
                console.log('customarr:',customArr);
                customArr.sort(() => Math.random() - 0.5);
                jebiboard(customArr);
            }
        }    
    }
    function jebiboard(arr){
        console.log('board',arr);
        for(let m=0; m<arr.length; m++) {
            <p onClick={result(this)}><span class="d-none">{m}</span></p>
        }
    }

    return (
        <div>
           <Header obj={headinfo}/>
           <aside>
                <form>
                    <p class="select">제비 개수
                        <select name="count" ref={countRef}>
                            <option value="">뽑을 제비의 개수를 선택하세요</option>
                            {count()}          
                        </select>
                    </p>   
                    <p class="select">제비 유형
                        <select name="content" ref={contentRef}>
                            <option value="">제비의 유형을 선택하세요</option>
                            <option value="number" selected>번호 매기기</option>
                            <option value="king">왕 뽑기</option>
                            <option value="custom">커스텀 설정</option>
                        </select>
                    </p>    
                    <fieldset>
                        <legend>커스텀 설정</legend>
                        <span>제비 안에 들어갈 내용을 적어주세요.</span><br/>
                        <span>제비의 개수와 들어갈 내용의 개수가 같아야 해요!👌</span><br/>
                        <input ref={customRef} type="text" name="custom" placeholder="ex) 마피아, 시민, 경찰"/>
                    </fieldset><br/>
                    <button type="button" onClick={jebimake}>만들기</button>
                </form>
           </aside>

        </div>
    );
};

export default Jebi;