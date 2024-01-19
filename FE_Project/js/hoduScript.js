let subscribeButton = document.querySelector('#button-modal');
let myModal = document.querySelector('#section-modal');
let closeButton = document.querySelector('#button-modal_close');

subscribeButton.addEventListener('click',()=>{
    myModal.style.display = 'flex';
});


closeButton.addEventListener('click',()=>{
    myModal.style.display='none';
});