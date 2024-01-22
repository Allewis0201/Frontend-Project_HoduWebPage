let myModal = document.querySelector('#section-modal');
let subscribeButton = document.querySelector('#button-modal');
let closeButton = document.querySelector('#button-modal_close');
let myForm = document.querySelector('#myForm');

subscribeButton.addEventListener('click',()=>{
    let email = document.querySelector("#input-sub").value;

    event.preventDefault();
    if(!email)
    {
        alert("이메일을 입력해주세요!");
        return;
    }
    else if(!isEmail(email))
    {
        alert("이메일 형식에 맞지 않습니다");
        return;
    }
    myModal.style.display='flex';
});

closeButton.addEventListener('click',()=>{
    myModal.style.display='none';
});

function isEmail(email)
{
    let check = /^[a-zA-Z0-9]([_]?[a-zA-Z0-9])*@[a-zA-Z0-9.]([a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/i;
    return check.test(email);
}