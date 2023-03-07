import React, { useEffect, useRef, useState } from 'react';
import GuestHeader from './Guest';
import axios from 'axios';
import '../css/guest.css';


const JebiComent = () => {
    const [jebidb, setJebidb] = useState([]);
    const commentRef = useRef();
    const jebiTitle = useRef();
    useEffect(()=>{
        axios({
            method: 'get', 
            url: `${process.env.REACT_APP_SERVER_URL}/jebidb`
        })
        .then((res)=>{
            setJebidb(res.data);
        });
    },[]);
    function createcomment() {
        if(window.confirm('등록이 완료된 댓글은 수정/삭제가 불가능합니다. 정말 올리시겠어요?')) {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_URL}/jebicreate`,
                data:{game: jebiTitle.current.id, comment: commentRef.current.value} 
            })
            .then((res)=>{
                commentRef.current.value = '';
                setJebidb(jebidb.concat(res.data));
            });
        } 
    }
  
    return (
        <>
            <GuestHeader/>
            <p className='title' id='jebi' ref={jebiTitle}>❤️제비뽑기❤️</p>
            <div className='guestboard'>
                {jebidb.length <1 ? <span className='comment'>comment를 등록해 보세요!</span> : jebidb.map((el)=> { return (
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

export default JebiComent;