import React, { useEffect, useRef, useState } from 'react';
import GuestHeader from './GuestHeader';
import axios from 'axios';
import '../css/guest.css';


const JebiComent = () => {
    const [jebidb, setJebidb] = useState([]);
    const commentRef = useRef();
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:8090/jebidb'
        })
        .then((res)=>{
            console.log(res.data);
            setJebidb(res.data);
            console.log('state',jebidb);
        });
    },[]);
    function createcomment() {
        console.log(commentRef.current.value);
        axios({
            method: 'post',
            url: 'http://localhost:8090/jebicreate',
            data:{comment: commentRef.current.value} 
        })
        .then((res)=>{
            console.log('fromserver',res.data);
            setJebidb(res.data);
        });
    }
    function commenthover(e) {
        e.target.children[0].className = '';
    } 
    function deletecomment(e) {
        console.log('delete',e.target.parent);
        /*axios({
            method: 'post',
            url: 'http://localhost:8090/jebidelete'
            data: 
        })*/
    }
    return (
        <>
            <GuestHeader/>
            <h3>JebiComent</h3>
            <div className='guestboard'>
                {jebidb.map((el)=> { return (
                    <div className='comment' key={el.id} onClick={(e)=>{commenthover(e)}}>
                        {el.comment}
                        <span className='d-none' onClick={(e)=>{deletecomment(e)}}>❌</span>
                    </div>
                )})}
                <input className='commentinput'ref={commentRef} placeholder='욕설이나 부적절한 언행은 삼가주세요!'/>
                <button className='commentbtn' type="button" onClick={createcomment}>쓰기</button>
            </div>
            <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default JebiComent;