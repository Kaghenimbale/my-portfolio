let navLink = document.getElementsByClassName('nav-link');
let menu = document.getElementsByClassName('menu');
let close = document.getElementsByClassName('closeIcon')
console.log(navLink);
console.log(menu);
console.log(close);
console.log('sunga');

menu.addEventListeners('click', ()=>{
    navLink.style.display = 'initial';
})

close.addEventListeners('click', ()=>{
    navLink.style.display = 'none';
})
