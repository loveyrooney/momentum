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

const Dday = document.querySelector("#Dday")

function dDay(){
    const christmas = new Date("2022-12-25");
    const today = new Date();
    const d = Math.floor((christmas-today)/(1000*60*60*24));
    Dday.innerText = `CRHISTMASπ D - ${d}`
}

dDay();
setInterval(dDay, 86400);

/* setInterval : κ³μν΄μ ν¨μλ₯Ό μ€ννκ³  μΆμλ. setInterval(ν¨μμ΄λ¦, λͺmsλ§λ€ μ€ν)
setTimeout : ν¨μλ₯Ό νΉμ  μκ°μ μ€ννκ³  μΆμλ. setTimeout(ν¨μμ΄λ¦, λͺ msνμ μ€ν)
μλ°μ€ν¬λ¦½νΈ λ΄μλ λ§μ κΈ°λ₯λ€μ΄ μλλ° κ·Έμ€μλ νμ¬ λ μ§ λ° μκ°μ μμλ₯Ό κ°μ§κ³  μμ. 
κ·Έκ±°λ₯Ό λΆλ¬μ€λ λ°©λ²μ΄ new Date()μ. μ½μμμ λ΄ λ°μμ μ€ννλ©΄ μ€λμ λͺ¨λ  μκ°μ λ³΄ κ² κ°λ₯. 
μ΄μ€μμ μ°λ¦¬λ μκ³μλ€ μ,λΆ,μ΄λ§ λ³΄μ¬μ£Όκ³  μΆμκ±°μ. κ·Έ κ° μμλ€μ date.getHours()λΌλ λ°©μμΌλ‘ κ°μ Έμ΄.
μ΄κ±΄ λ§μΉ localstorage.getItem()κ³Ό λκ°μ λ°©μμ. */