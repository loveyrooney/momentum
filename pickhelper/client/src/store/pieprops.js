const initState = {
    pie2: 
        {
            pieCount : 2,
            pieColor : 'red 0deg, red 90deg ,blue 90deg, blue 270deg, red 270deg, red 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['40%', '40%'],
            top : ['25%','65%']
        },
    pie3:
        {
            pieCount : 3,
            pieColor : 'red 0deg,red 120deg, blue 120deg, blue 240deg, yellow 240deg, yellow 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['65%','15%','40%'],
            top : ['35%','35%','75%']
        },
    pie4:
        {
            pieCount : 4,
            pieColor : 'yellowgreen 0deg, yellowgreen 90deg, red 90deg, red 180deg, yellow 180deg, yellow 270deg, blue 270deg, blue 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['15%','65%','15%','65%'],
            top : ['25%','25%','65%','65%']
        },
    pie5:
        {
            pieCount : 5,
            pieColor : 'yellowgreen 0deg, yellowgreen 72deg, red 72deg, red 144deg, yellow 144deg, yellow 216deg, blue 216deg, blue 288deg, skyblue 288deg, skyblue 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['20%','60%','10%','70%','40%'],
            top : ['25%','25%','55%','55%','75%']
        },
    pie6:
        {
            pieCount : 6,
            pieColor : 'yellowgreen 0deg, yellowgreen 60deg, red 60deg, red 120deg, yellow 120deg, yellow 180deg, blue 180deg, blue 240deg, skyblue 240deg, skyblue 300deg, grey 300deg, grey 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['20%','60%','10%','70%','20%','60%'],
            top : ['20%','20%','45%','45%','75%','75%']
        },
    pie7:
        {
            pieCount : 7,
            pieColor : 'yellowgreen 0deg, yellowgreen 51deg, red 51deg, red 102deg, yellow 102deg, yellow 153deg, blue 153deg, blue 204deg, skyblue 204deg, skyblue 256deg, grey 256deg, grey 307deg, orange 307deg, orange 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['22%','57%','10%','70%','12%','68%','40%'],
            top : ['15%','15%','40%','40%','65%','65%','85%']
        },
    pie8:
        {
            pieCount : 8,
            pieColor : 'yellowgreen 0deg, yellowgreen 45deg, red 45deg, red 90deg, yellow 90deg, yellow 135deg, blue 135deg, blue 180deg, skyblue 180deg, skyblue 225deg, grey 225deg, grey 270deg, orange 270deg, orange 315deg, purple 315deg, purple 360deg',
            startDeg : '0deg',
            stopDeg : '0deg',
            left : ['25%','53%','7%','70%','7%','70%','25%','52%'],
            top : ['15%','15%','35%','35%','57%','57%','77%','77%']
        },
        
        
}

const KEYFRAME = 'pieprops/KEYFRAME';

export function keyframe(payload) {
    return {
        type: KEYFRAME,
        payload
    }
}

export default function pieprops(state = initState, action) {
    switch (action.type) {
        case KEYFRAME:
            if(action.payload.pieChannel === 'pie2')
            return {
                ...state,
                pie2:{ ...state.pie2, ...action.payload}
            }; else if(action.payload.pieChannel === 'pie3') 
            return {
                ...state,
                pie3:{ ...state.pie3, ...action.payload}
            }; else if(action.payload.pieChannel === 'pie4') 
            return {
                ...state,
                pie4:{ ...state.pie4, ...action.payload}
            }; else if(action.payload.pieChannel === 'pie5') 
            return {
                ...state,
                pie5:{ ...state.pie5, ...action.payload}
            }; else if(action.payload.pieChannel === 'pie6') 
            return {
                ...state,
                pie6:{ ...state.pie6, ...action.payload}
            }; else if(action.payload.pieChannel === 'pie7') 
            return {
                ...state,
                pie7:{ ...state.pie7, ...action.payload}
            }; else return {
                ...state,
                pie8:{ ...state.pie8, ...action.payload}
            };
        default:
            return state;
    }
}