const clock = document.querySelector("#clock")

function getclock() {
    const newdate = new Date();
    const years = String(newdate.getFullYear());
    const month = String(newdate.getMonth()+1);
    const date = String(newdate.getDate());
    const day = newdate.getDay();
    const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let week = WEEKDAY[day];
    const hours = String(newdate.getHours()).padStart(2,"0");
    const minutes = String(newdate.getMinutes()).padStart(2,"0");
    const seconds = String(newdate.getSeconds()).padStart(2,"0");
    clock.innerText = `${years}. ${month}.${date}. ${week} ${hours}:${minutes}:${seconds}`
}

getclock();
setInterval(getclock, 1000);

/* setInterval : 계속해서 함수를 실행하고 싶을때. setInterval(함수이름, 몇ms마다 실행)
setTimeout : 함수를 특정 시간에 실행하고 싶을때. setTimeout(함수이름, 몇 ms후에 실행)
자바스크립트 내에는 많은 기능들이 있는데 그중에는 현재 날짜 및 시각의 요소를 가지고 있음. 
그거를 불러오는 방법이 new Date()임. 콘솔에서 뉴 데잇을 실행하면 오늘의 모든 시각정보 겟 가능. 
이중에서 우리는 시계에다 시,분,초만 보여주고 싶은거임. 그 각 요소들을 date.getHours()라는 방식으로 가져옴.
이건 마치 localstorage.getItem()과 똑같은 방식임. */