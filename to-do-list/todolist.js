let inputValue;    // 입력값 저장 변수
let checkbox;       // 체크박스
let outputLabel;    // 입력값 출력 라벨
let deleteButton; // 삭제 버튼

function pressEnter(){
    if(event.keyCode == 13){
        let container = document.createElement('div');
        inputValue = document.getElementById('todo').value;
        checkbox = document.createElement('input');
        outputLabel = document.createElement('label');
        deleteButton = document.createElement('button');
        checkbox.type = 'checkbox';
        
        outputLabel.innerHTML = inputValue;
        container.setAttribute('id', inputValue);
        checkbox.setAttribute('id', inputValue + 1);
        deleteButton.innerHTML = '삭제';

        container.appendChild(checkbox);
        container.appendChild(outputLabel);
        container.appendChild(deleteButton);

        document.getElementById("list_container").appendChild(container);
        document.getElementById("todo").value = "";

        checkbox.addEventListener("change", strikeThrough);

        // deleteButton.addEventListener("click", function(e){
        //     let toDoList = document.getElementById('list_container');         //삭제 함수
        //     toDoList.removeChild(container);
        // })

        deleteButton.addEventListener("click", deleteElement);
    }
}

function strikeThrough(e){
    let getDiv = document.getElementById(e.target.id.slice(0, -1));
    getDiv.classList.toggle("active");
}

function deleteElement(e){
    let toDoList = document.getElementById('list_container');
    toDoList.removeChild(this.parentElement);
}