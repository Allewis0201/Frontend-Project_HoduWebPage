let myModal = document.querySelector('#section-modal');
let subscribeButton = document.querySelector('#button-modal');
let closeButton = document.querySelector('#button-modal_close');
let myForm = document.querySelector('#myForm');

subscribeButton.addEventListener('click',()=>{
    let email = document.querySelector("#input-sub").value;

    /*if(!myForm.checkValidity())
    {
        alert("제대로 된 이메일 형식이 아닙니다");
    }

    if(!email)
    {
        console.log("test1");
        return;
    }
    else if(email.indexOf("@") != -1)
    {
        console.log("test2");
        if(email.length >= 7)
        {
            myModal.style.display = 'flex';
        }
        else
        {
            return;
        }
    }
    else
    {
        return;
    }*/


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