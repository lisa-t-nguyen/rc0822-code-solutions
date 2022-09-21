var h1Text = document.querySelector('.message');

function helloThere(event) {
  h1Text.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
