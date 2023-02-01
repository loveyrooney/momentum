import styled, { keyframes } from "styled-components";

const MyInput = styled.input`
    width: 60px;
    height: 23px;
    position: absolute;
    border-radius: 5px; 
    border-color: rgb(188,188,188); 
    border-style: solid;
    left: ${(props)=>props.left};
    top: ${(props)=>props.top};
`
const ani = (startDeg, stopDeg) => keyframes`
0% { 
    transform: rotate(${startDeg}); 
        transition-timing-function: ease-out;
}
100%{ 
    transform: rotate(${stopDeg}); 
}
`
const MyBoard = styled.div`
    display: inline-block; 
    width: 300px; 
    height: 300px; 
    border-radius: 50%;
    margin: 0 10% 10% 10%; 
    position: relative;
    background: conic-gradient(${(props)=>props.pieColor});
    animation-name: ${(props)=>ani(props.startDeg, props.stopDeg)};
    animation-duration: 0.1s;
    animation-fill-mode: forwards;  
    animation-iteration-count: 15;
`

const Board = ({pieCount,pieColor,startDeg,stopDeg,left,top}) => {
    function pie() {
        let countArr = [];
        for (let i=0; i<pieCount; i++) {
            countArr.push(<MyInput key={i} left={left[i]} top={top[i]}/>)
        }
        return countArr;
    }
    return (
        <>
            <span className='dot'>👇</span>
            <MyBoard piecount={pieColor} pieColor={pieColor} startDeg={startDeg} stopDeg={stopDeg}>
                {pie()}
            </MyBoard>
        </>
        
    );
};

export default Board;