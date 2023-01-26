import React from 'react';
import '../css/index.css';
import {Link} from 'react-router-dom';

const Index = () => {
    return (
        <>
        <header>
            <h1>Pick Helper</h1>
            <div id="subtitle">
                <span className="subtitle">결정장애는 이제 그만!</span><br/>
                <span className="subtitle">랜덤게임으로 재미있고 빠른 결정✅</span>
            </div>
        </header>
        <article>
            <div className="gamecontainer">
                <Link id="jebi" className="gamebox jebi" to="/jebi">제비 뽑기</Link>
                <Link id="roulette" className="gamebox roulette" to="/roulette">원판 돌리기</Link>
                <Link id="dungle" className="gamebox dungle" to="/dungle">둥글게둥글게</Link>
                <Link id="tournament" className="gamebox tournament" to="/tournament">월드컵</Link>
                <Link className="btn" to="/guest">방문자 후기 보러가기❤️</Link>
            </div>
        </article>
        <footer><p>programed by rooney</p></footer>
        </>
    );
};

export default Index;