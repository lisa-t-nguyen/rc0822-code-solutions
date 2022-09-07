function handleFocus(event) {
  console.log(focus);
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log(blur);
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var username = document.querySelector('#user-name');
var useremail = document.querySelector('#user-email');
var usermessage = document.querySelector('#user-message');

username.addEventListener('focus', handleFocus);
username.addEventListener('blur', handleBlur);
username.addEventListener('input', handleInput);

useremail.addEventListener('focus', handleFocus);
useremail.addEventListener('blur', handleBlur);
useremail.addEventListener('input', handleInput);

usermessage.addEventListener('focus', handleFocus);
usermessage.addEventListener('blur', handleBlur);
usermessage.addEventListener('input', handleInput);
