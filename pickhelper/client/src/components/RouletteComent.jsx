import React, { useEffect, useRef, useState } from 'react';
import GuestHeader from './Guest';
import axios from 'axios';
import '../css/guest.css';

const RouletteComent = () => {
    const [roulettedb, setRoulettedb] = useState([]);
    const commentRef = useRef();
    const rouletteTitle = useRef();
    useEffect(()=>{
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/roulettedb`
        })
        .then((res)=>{
            setRoulettedb(res.data);
        });
    },[]);
    function createcomment() {
        if(window.confirm('등록이 완료된 댓글은 수정/삭제가 불가능합니다. 정말 올리시겠어요?')) {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_URL}/roulettecreate`,
                data:{ game: rouletteTitle.current.id, 
                       comment: commentRef.current.value} 
            })
            .then((res)=>{
                commentRef.current.value = '';
                setRoulettedb(roulettedb.concat(res.data));
            });
        } 
    }
    return (
        <>
            <GuestHeader/>
            <p className='title' id='roulette' ref={rouletteTitle}>❤️룰렛 돌리기❤️</p>
            <div className='guestboard'>
                {roulettedb.map((el)=> { return (
                    <div id={el.id} key={el.id}>
                        <span className='comment'>{el.comment}</span>
                        {/* <span className='d-none' onClick={(e)=>{deletecomment(e)}}>❌</span> */}
                    </div>
                )})}
                <input className='commentinput'ref={commentRef} placeholder='욕설이나 부적절한 언행은 NOPE!'/>
                <button className='commentbtn' type="button" onClick={createcomment}>등록</button>
            </div>
            <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default RouletteComent;