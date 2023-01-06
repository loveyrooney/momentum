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

/* JSON.stringify()와 JSON.parse() 는 각각 array의 string화, 그리고 그 반대기능. */
/* forEach는 array의 각각의 item들에게 function을 적용할수 있게 하는 기능. 
forEach((item)=> 함수의 내용); 으로 화살표함수를 쓰거나, forEach(함수이름) 한 뒤, 새로운 함수 정의해도 됨 */