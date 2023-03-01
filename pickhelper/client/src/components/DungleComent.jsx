import React, { useEffect, useRef, useState } from 'react';
import GuestHeader from './Guest';
import axios from 'axios';
import '../css/guest.css';

const DungleComent = () => {
    const [dungledb, setDungledb] = useState([]);
    const commentRef = useRef();
    const dungleTitle = useRef();
    useEffect(()=>{
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/dungledb`
        })
        .then((res)=>{
            setDungledb(res.data);
        });
    },[]);
    function createcomment() {
        if(window.confirm('등록이 완료된 댓글은 수정/삭제가 불가능합니다. 정말 올리시겠어요?')) {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_URL}/dunglecreate`,
                data:{ game: dungleTitle.current.id, 
                       comment: commentRef.current.value} 
            })
            .then((res)=>{
                commentRef.current.value = '';
                setDungledb(dungledb.concat(res.data));
            });
        } 
    }
    return (
        <>
            <GuestHeader/>
            <p className='title' id='dungle' ref={dungleTitle}>❤️둥글게 둥글게❤️</p>
            <div className='guestboard'>
                {dungledb.map((el)=> { return (
                    <div id={el.id} key={el.id}>
                        <span className='comment'>{el.comment}</span>
                        {/* <span className='d-none' onClick={(e)=>{deletecomment(e)}}>❌</span> */}
                    </div>
                )})}
                <input className='commentinput'ref={commentRef} placeholder='욕설이나 부적절한 언행은 삼가주세요!'/>
                <button className='commentbtn' type="button" onClick={createcomment}>등록</button>
            </div>
            <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default DungleComent;