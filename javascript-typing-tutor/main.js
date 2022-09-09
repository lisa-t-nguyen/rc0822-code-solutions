var characters = document.querySelectorAll('.text');
var spanLocation = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === characters[spanLocation].textContent) {
    characters[spanLocation].className = 'text-under';
    if (event.key === characters[spanLocation].textContent) {
      characters[spanLocation].className = 'text-green';
    }
    spanLocation++;
    characters[spanLocation].className = 'text-under';
  } else {
    characters[spanLocation].className = 'text-red';
  }
});
