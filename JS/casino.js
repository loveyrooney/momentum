const casinoform = document.querySelector("#casino")
const chose = document.querySelector("#chose")
const range = document.querySelector("#range")
const span1 = document.querySelector("#first")
const span2 = document.querySelector("#last")

function casino(event){
    event.preventDefault();
    let machine = Math.ceil(Math.random()*range.value);
    span1.innerText = `Your Chose : ${chose.value}, Machine Chose : ${machine}`;
    if (chose.value == machine){
        span2.innerText = ", You Won😎";
    } else {
        span2.innerText = ", You Lost😞";
    };

}

casinoform.addEventListener("submit",casino);