let modal=document.querySelector('.modal');
let overlay=document.querySelector('.overlay');

//Modal Open Function 
const openModal=()=>{
    console.log('modal is open');
modal.classList.add('active');
modal.classList.add('overlayactive');
}

//Modal close Function
const closeModal=()=>{
    console.log('modal is close');
    modal.classList.remove('active');
    modal.classList.remove('overlayactive');
}