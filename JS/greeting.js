const loginForm = document.querySelector("#login")
const loginInput = document.querySelector("#login input")
const greeting = document.querySelector("#greeting")
const title = document.querySelector("#title")

const HIDDEN_CLASSNAME = "hidden";
const userIDkey = "userID";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    title.classList.add(HIDDEN_CLASSNAME);
    const userIDvalue = loginInput.value;
    localStorage.setItem(userIDkey, userIDvalue);
    paintgreeting(userIDvalue);

}

function paintgreeting(userIDvalue) {
    title.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = ` Hello, ${userIDvalue}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const member = localStorage.getItem(userIDkey);

if (member === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintgreeting(member);
}


/* HTML 태그 중에서 사용자에게서 입력받기에 대한 부분 더 공부 필요.
여기서는 form 태그를 예제로 들면 form태그는 그 안의 내용을 submit 하는 디폴트 기능이 브라우저에 있음.
브라우저는 여러가지의 디폴트 기능을 가지고 있는데. 
그 말은 함수를 실행할때 디폴트 값인 인수가 자동으로 적용되서 실행된단 얘기임.
그 디폴트 기능을 실행할 수 있는 디폴트 인수는 여러가지 정보들을 담고 있음. 
그래서 submit의 디폴트 기능을 멈추기 위해서 onLoginSubmit함수를 만들고 있는 거임. 
디폴트 인수를 지정(변수느낌, 관행으로 event)을 해 주면, 디폴트 기능을 컨트롤할 수 있음. */