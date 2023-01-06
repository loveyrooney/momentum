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
    const userIDelement = loginInput.value;
    localStorage.setItem(userIDkey, userIDelement);
    paintgreeting(userIDelement);
    modalopen();

}

const modal = document.querySelector("#modalbg");
const modalbtn = document.querySelector("#modalclose");

function modalopen(){
    modal.classList.remove(HIDDEN_CLASSNAME);
    modalbtn.addEventListener("click", ()=>{
        modal.classList.add(HIDDEN_CLASSNAME)
    },{once:true});
}


function paintgreeting(userIDelement) {
    title.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = ` Hello, ${userIDelement}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const todoopen = document.querySelector(".todoinput");
    todoopen.disabled = false; 
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



const random = document.querySelector("#random")
const range = document.querySelector("#range")
const guess = document.querySelector("#guess")
const btn = document.querySelector("#btn");
const span = document.querySelector("#span");
const span2 = document.querySelector("#span2")

function casino(event){
    event.preventDefault();
    let machine =  Math.ceil(Math.random() * range.value);
    span.innerText = `Your chose: ${guess.value}, Machine chose: ${machine}`;
    if (guess.value == machine){
        span2.innerText = "You Won😎";
    } else {
        span2.innerText = "You Lost😐";
    };
}

random.addEventListener("submit",casino);


const clock = document.querySelector(".clock")

function Dday(){
    const Christmas = new Date("2022-12-25");
    const today = new Date();
    const d = Math.floor((Christmas - today)/(1000*60*60*24));
    /*const h = Math.floor((Christmas - today)/(1000*60*60) % 24);
    const m = Math.floor((Christmas - today)/(1000*60) % 60);
    const s = Math.floor((Christmas - today)/1000 % 60); */

    clock.innerText = `CHRISTMAS🎄 D - ${d}`
}

setInterval(Dday, 1000);


const color = document.querySelector("#color")
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  let picked = [];  

function randomColor(){
    
    picked.splice(0,2);
    /*while(colors.length > 2){
        let pick1 = colors.splice(Math.floor(Math.random() * colors.length),1)[0];
        picked.push(pick1);
    }*/
    const pickedcolor = colors[Math.floor(Math.random() * colors.length)];
    const pickedcolor2 = colors[Math.floor(Math.random() * colors.length)];
    if (pickedcolor2 == pickedcolor){
        const pickedcolor3 = colors[Math.floor(Math.random() * colors.length)];
        picked.push(pickedcolor,pickedcolor3);
    } else {
        picked.push(pickedcolor,pickedcolor2);
    }
    const style = document.querySelector("style");
    style.innerHTML = `body{ background : linear-gradient(to right, ${picked[0]}, ${picked[1]});}`;
    document.head.appendChild(style);
}
  
color.addEventListener("click", randomColor);

const quotes = [
    { 
        quote : "In the beginning God created the heavens and the earth.",
        book : "Genesis 1:1" 
    }
,
    { 
        quote : "The LORD is my shepherd, I shall not want.",
        book : "Psalms 23:1"
    }
,
    { 
        quote : "The people whom I formed for Myself Will declare My praise.",
        book : "Isaiah 43:21"
    }
,
    { 
        quote : "The LORD will fight for you while you keep silent.",
        book : "Exodus 14:14"
    }
,
    { 
        quote : "The Lord GOD is my strength, And He has made my feet like hinds' feet, And makes me walk on my high places.",
        book : "Habakkuk 3:19"
    }
,
    { 
        quote : "There was the true Light which, coming into the world, enlightens every man.",
        book : "John 1:9"
    }
,
    { 
        quote : "Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven.",
        book : "Matthew 5:16"
    }
,
    { 
        quote : "And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.",
        book : "Romans 8:28"
    }
,
    { 
        quote : "Now faith is the assurance of things hoped for, the conviction of things not seen.",
        book : "Hebrews 11:1"
    }
,
    { 
        quote : "For I am confident of this very thing, that He who began a good work in you will perfect it until the day of Christ Jesus.",
        book : "Philippians 1:6"
    }
];

const quote = document.querySelector("#quote");
const book = document.querySelector("#author");

const randomquote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = randomquote.quote;
book.innerText = randomquote.book;


const today = document.querySelector("#today")

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
    today.innerText = `${years}. ${month}.${date}. ${week} ${hours}:${minutes}:${seconds}`
}

getclock();
setInterval(getclock, 1000);


const ToDoForm = document.querySelector("#todo")
const ToDoInput = ToDoForm.querySelector("input")
// ToDoInput = document.querySelector("#todo input") 과 같은데, ToDoFrom을 이미 변수화 했기 때문에 위와같이 쓸수 있음//
const ToDoList = document.querySelector("#todolist")

let ToDos = [];
const ToDoskey = "ToDos";

function saveToDo(){
    localStorage.setItem("ToDoskey", JSON.stringify(ToDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter((item)=> item.id !== parseInt(li.id));
    saveToDo();
}
// target은 많은 버튼들 중에서 클릭이 된 the 버튼을 가려낸다, parentElement는 그 버튼이 속한 리스트를 찾아냄 // 

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = `${newToDo.text} `;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.style.backgroundColor = "transparent";
    button.style.border = "0";
    button.style.outline = "0";
    button.addEventListener("click",deleteToDo);  //이 클릭 이벤트는 생성되는 모든 버튼에 일괄적용상태 //
    li.appendChild(span);
    li.appendChild(button);
    ToDoList.appendChild(li);
}

function ToDoSubmitHandler(event){
    event.preventDefault();
    const newToDo = ToDoInput.value;
    ToDoInput.value = "";
    const newToDoOJ = {
        text:newToDo,
        id : Date.now(),
    };
    ToDos.push(newToDoOJ);
    paintToDo(newToDoOJ);
    saveToDo();
}

ToDoForm.addEventListener("submit",ToDoSubmitHandler);

const memberToDo = localStorage.getItem("ToDoskey")

if (memberToDo !== null){
    const parseToDos = JSON.parse(memberToDo);
    ToDos = parseToDos;
    parseToDos.forEach(paintToDo);
}