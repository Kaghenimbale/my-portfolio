const inputmail = document.getElementById('email');
const form = document.getElementById('form');
const Alertmessage = document.getElementById('text');

form.addEventListener('submit', (e) => {
  if (inputmail.value !== inputmail.value.toLowerCase()) {
    Alertmessage.textContent = 'Invalid Email Address';
    Alertmessage.style.color = 'red';
    inputmail.style.border = ' 2px solid rgb(254, 87, 87)';
    inputmail.style.boxShadow = '1px 1px 10px rgb(254, 87, 87)';

    setTimeout(() => {
      Alertmessage.style.display = 'none';
      inputmail.style.border = 'none';
      inputmail.style.boxShadow = 'none';
    }, 8000);
    e.preventDefault();
  } else {
    Alertmessage.style.display = 'none';
    inputmail.style.border = '1px solid #16d64d';
  }
});
