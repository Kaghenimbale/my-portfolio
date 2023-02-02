const inputemail = document.getElementById('email');
const inputname = document.getElementById('name');
const formst = document.getElementById('form');

const Localstore = (e) => {
  e.preventDefault();
  const name = inputname.value;
  const email = inputemail.value;

  const obj = {};

  obj.Name = name;
  obj.Email = email;

  const result = JSON.stringify(obj);
  localStorage.setItem('data', result);
};
formst.addEventListener('submit', Localstore);