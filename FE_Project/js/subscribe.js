let myModal = document.querySelector('#section-modal');
let subscribeButton = document.querySelector('#button-modal');
let closeButton = document.querySelector('#button-modal_close');
let myForm = document.querySelector('#myForm');
let myInput = document.querySelector('#input-sub');


// subscribe 버튼을 누르면 입력된 값을 유효성 검사 한 후 검사 결과에 맞는 반응을 보여줍니다
// 정상적이라면 modal창이 나옵니다
subscribeButton.addEventListener('click',()=>{
    let email = document.querySelector("#input-sub").value;

    event.preventDefault();
    if(!email)
    {
        myInput.setCustomValidity("이메일을 입력해주세요!");
        myInput.reportValidity();
        return;
    }
    else if(!isEmail(email))
    {
       /* alert("이메일 형식에 맞지 않습니다");*/
        myInput.setCustomValidity("이메일 형식이 맞지 않습니다. 다시 입력해주세요");
        myInput.reportValidity();
        return;
    }
    myModal.style.display='flex';
});

// 모달창 끄는 이벤트
closeButton.addEventListener('click',()=>{
    myModal.style.display='none';
});

// 이메일 유효성 검사 함수
function isEmail(email)
{
    let check = /^[a-zA-Z0-9]([_]?[a-zA-Z0-9])*@[a-zA-Z0-9.]([a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/i;
    return check.test(email);
}