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
    return {
        type: DIVIDE,
        payload: dungleArr
    }
}

export function extra(payload) {
    console.log(payload.extraArr);
    const extraArr = payload.extraArr[payload.extraArr.length-1];
    const groupArr = Array.from({length:payload.extraArr.length -1}, (v,i)=>i+1).sort(() => Math.random() - 0.5); 
    return {
        type: EXTRA,
        payload: {extragroup: extraArr, groupname: groupArr}
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