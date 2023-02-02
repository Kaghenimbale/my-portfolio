const inputemail = document.getElementById('email');
const inputname = document.getElementById('name');
const formst = document.getElementById('form');

const Localstore = (e) => {
    e.preventDefault();
    const name = inputname.value;
    const email = inputemail.value;
    if (name && email) {
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
    }
};
formst.addEventListener('submit', Localstore);