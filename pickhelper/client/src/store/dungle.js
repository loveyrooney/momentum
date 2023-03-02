const initState = { default: []}

const DIVIDE = 'dungle/divide';
const EXTRA = 'dungle/extra';

export function divide(payload) {
    const total = Array.from({length:payload.total}, (v,i)=>i+1).sort(() => Math.random() - 0.5); 
    const classtotal = Math.floor(total.length / payload.group); 
    let dungleArr = [];
    for (let i = 0; i < total.length; i += classtotal) {
        dungleArr.push(total.slice(i, i + classtotal));
    }
    if(total.length % payload.group == 0) {
        return {
            type: DIVIDE,
            payload: {board: dungleArr, type:3}
        }
    } else {
        return {
            type: DIVIDE,
            payload: {board: dungleArr, type:1}
        }
    }
}

export function extra(payload) {
    let firstgroup = payload.firstArr.board; 
    console.log(firstgroup);
    const extraArr = firstgroup.pop();
   // const groupArr = Array.from({length:firstgroup.length -1}, (v,i)=>i+1); 
    let secondgroup = [...firstgroup];
    for(let j=0; j<extraArr.length; j++) {
        secondgroup[j].push(extraArr[j]);
    }
    
    return {
        type: EXTRA,
        payload: { board: secondgroup, type:2}
    }
}

export default function dungle(state = initState, action) {
    switch (action.type) {
        case DIVIDE:
            return {...state, default: action.payload}
        case EXTRA:
            return {...state, default: action.payload}
        default:
            return state;
    }
}