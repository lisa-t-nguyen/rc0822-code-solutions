var h1Text = document.querySelector('.countdown-display');

function earthBelowUs(event) {
  if (h1Text.textContent === '4') {
    h1Text.textContent = '3';
  } else if (h1Text.textContent === '3') {
    h1Text.textContent = '2';
  } else if (h1Text.textContent === '2') {
    h1Text.textContent = '1';
  } else if (h1Text.textContent === '1') {
    h1Text.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(earthBelowUs, 2000);
