let navLink = document.querySelector('.nav-link');
let menu = document.querySelector('.menu-Icon');
let close = document.querySelector('.closeIcon')

menu.addEventListener('click', ()=>{
    navLink.style.marginLeft=0;
})

close.addEventListener('click', ()=>{
    navLink.style.marginLeft = '-1000px';
})
