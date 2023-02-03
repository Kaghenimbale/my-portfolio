const inputemail = document.getElementById('email');
const inputname = document.getElementById('name');
const formst = document.getElementById('form');
const textarea = document.getElementById('textarea');

const Localstore = (e) => {
  e.preventDefault();
  const name = inputname.value;
  const email = inputemail.value;
  const message = textarea.value;

  const obj = {};

  obj.Name = name;
  obj.Email = email;
  obj.Message = message;

  const result = JSON.stringify(obj);
  localStorage.setItem('data', result);
};

formst.addEventListener('submit', Localstore);

const getdatastored = JSON.parse(localStorage.getItem('data'));

window.onload = () => {
  if (getdatastored) {
    inputname.value = getdatastored.Name;
    inputemail.value = getdatastored.Email;
    textarea.value = getdatastored.Message;
  }
};