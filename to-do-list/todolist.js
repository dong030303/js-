function pressEnter(){
    if(event.keyCode == 13){
        let iv = document.getElementById('todo').value;    // 입력값 저장 변수
        let condiv = document.createElement('div');        // 컨테이너 디브
        let check = document.createElement('input');       // 체크박스
        check.type = 'checkbox';
        let addlabel = document.createElement('label');    // 입력값 출력 라벨
        let delete_btn = document.createElement('button'); // 삭제 버튼
        addlabel.innerHTML = iv;
        condiv.setAttribute('id', iv);
        check.setAttribute('id', iv + 1);
        delete_btn.innerHTML = '삭제';

        condiv.appendChild(check);
        condiv.appendChild(addlabel);
        condiv.appendChild(delete_btn);

        document.getElementById("list_container").appendChild(condiv);
        document.getElementById("todo").value = "";

        check.addEventListener("change", function(e){                       //완료 함수
            let chId = e.target.id;
            let getDiv = document.getElementById(chId.slice(0, -1));
            getDiv.classList.toggle("active");
        })

        delete_btn.addEventListener("click", function(e){
            let parent = document.getElementById('list_container');         //삭제 함수
            parent.removeChild(condiv);
        })
    }
}