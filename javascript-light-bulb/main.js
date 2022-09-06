var buttonClicks = 0;
var bright = document.querySelector('.light-bulb');
var background = document.querySelector('.background');

bright.addEventListener('click', function (event) {
  buttonClicks++;
  if (buttonClicks % 2) {
    bright.className = 'light-bulb-dark';
    background.className = 'background-dark';
  } else {
    bright.className = 'light-bulb';
    background.className = 'background';
  }
});
