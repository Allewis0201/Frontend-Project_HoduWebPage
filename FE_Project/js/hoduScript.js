let myModal = document.querySelector('#section-modal');
let subscribeButton = document.querySelector('#button-modal');
let closeButton = document.querySelector('#button-modal_close');
let myForm = document.querySelector('#myForm');
let myInput = document.querySelector('#input-sub');

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

closeButton.addEventListener('click',()=>{
    myModal.style.display='none';
});

function isEmail(email)
{
    let check = /^[a-zA-Z0-9]([_]?[a-zA-Z0-9])*@[a-zA-Z0-9.]([a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/i;
    return check.test(email);
}