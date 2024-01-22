let myModal = document.querySelector('#section-modal');
let subscribeButton = document.querySelector('#button-modal');
let closeButton = document.querySelector('#button-modal_close');

subscribeButton.addEventListener('click',()=>{
    let email = document.querySelector("#input-sub").value;

    if(!email)
    {
        console.log("test1");
        return;
    }
    else if(email.indexOf("@") != -1)
    {
        console.log("test2");
        if(email.length >= 3)
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
    }
});

closeButton.addEventListener('click',()=>{
    myModal.style.display='none';
});