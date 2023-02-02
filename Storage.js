const inputemail = document.getElementById('email');
const inputname = document.getElementById('name');
const formst = document.getElementById('form');
const arr = [];
const Localstore = (e) => {
  e.preventDefault();
  const name = inputname.value;
  const email = inputemail.value;

  const obj = {};

  obj.Name = name;
  obj.Email = email;

  const result = JSON.stringify(obj);
  arr.push(result);
  localStorage.setItem('data', JSON.stringify(arr));
};

formst.addEventListener('submit', Localstore);