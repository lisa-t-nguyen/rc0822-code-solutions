var $pikachu = document.getElementById('pikachu');
var $bulbasaur = document.getElementById('bulbasaur');
var $charmander = document.getElementById('charmander');
var $squirtle = document.getElementById('squirtle');
var $jigglypuff = document.getElementById('jigglypuff');
var $chevronRight = document.querySelector('.right-chevron');
var $chevronLeft = document.querySelector('.left-chevron');
var $circle1 = document.querySelector('.circle1');
var $circle2 = document.querySelector('.circle2');
var $circle3 = document.querySelector('.circle3');
var $circle4 = document.querySelector('.circle4');
var $circle5 = document.querySelector('.circle5');
var data = {
  view: 'pikachu'
};

function viewChange(string) {
  data.view = string;
  if (string === 'pikachu') {
    $pikachu.className = 'view pokemondiv';
    $bulbasaur.className = 'hidden pokemondiv';
    $charmander.className = 'hidden pokemondiv';
    $squirtle.className = 'hidden pokemondiv';
    $jigglypuff.className = 'hidden pokemondiv';
    $circle1.className = 'fa-solid fa-circle bottomcircle circle1';
    $circle4.className = 'fa-regular fa-circle bottomcircle circle4';
    $circle5.className = 'fa-regular fa-circle bottomcircle circle5';
    $circle2.className = 'fa-regular fa-circle bottomcircle circle2';
    $circle3.className = 'fa-regular fa-circle bottomcircle circle3';
  }
  if (string === 'bulbasaur') {
    $bulbasaur.className = 'view pokemondiv';
    $pikachu.className = 'hidden pokemondiv';
    $charmander.className = 'hidden pokemondiv';
    $squirtle.className = 'hidden pokemondiv';
    $jigglypuff.className = 'hidden pokemondiv';
    $circle2.className = 'fa-solid fa-circle bottomcircle circle2';
    $circle4.className = 'fa-regular fa-circle bottomcircle circle4';
    $circle1.className = 'fa-regular fa-circle bottomcircle circle1';
    $circle5.className = 'fa-regular fa-circle bottomcircle circle5';
    $circle3.className = 'fa-regular fa-circle bottomcircle circle3';
  }
  if (string === 'charmander') {
    $charmander.className = 'view pokemondiv';
    $bulbasaur.className = 'hidden pokemondiv';
    $pikachu.className = 'hidden pokemondiv';
    $squirtle.className = 'hidden pokemondiv';
    $jigglypuff.className = 'hidden pokemondiv';
    $circle3.className = 'fa-solid fa-circle bottomcircle circle3';
    $circle4.className = 'fa-regular fa-circle bottomcircle circle4';
    $circle1.className = 'fa-regular fa-circle bottomcircle circle1';
    $circle2.className = 'fa-regular fa-circle bottomcircle circle2';
    $circle5.className = 'fa-regular fa-circle bottomcircle circle5';
  }
  if (string === 'squirtle') {
    $squirtle.className = 'view pokemondiv';
    $charmander.className = 'hidden pokemondiv';
    $bulbasaur.className = 'hidden pokemondiv';
    $pikachu.className = 'hidden pokemondiv';
    $jigglypuff.className = 'hidden pokemondiv';
    $circle4.className = 'fa-solid fa-circle bottomcircle circle4';
    $circle5.className = 'fa-regular fa-circle bottomcircle circle5';
    $circle1.className = 'fa-regular fa-circle bottomcircle circle1';
    $circle2.className = 'fa-regular fa-circle bottomcircle circle2';
    $circle3.className = 'fa-regular fa-circle bottomcircle circle3';
  }
  if (string === 'jigglypuff') {
    $jigglypuff.className = 'view pokemondiv';
    $squirtle.className = 'hidden pokemondiv';
    $charmander.className = 'hidden pokemondiv';
    $bulbasaur.className = 'hidden pokemondiv';
    $pikachu.className = 'hidden pokemondiv';
    $circle5.className = 'fa-solid fa-circle bottomcircle circle5';
    $circle4.className = 'fa-regular fa-circle bottomcircle circle4';
    $circle1.className = 'fa-regular fa-circle bottomcircle circle1';
    $circle2.className = 'fa-regular fa-circle bottomcircle circle2';
    $circle3.className = 'fa-regular fa-circle bottomcircle circle3';
  }
}

viewChange('pikachu');

$circle1.addEventListener('click', function (event) {
  viewChange('pikachu');
});

$circle2.addEventListener('click', function (event) {
  viewChange('bulbasaur');
});

$circle3.addEventListener('click', function (event) {
  viewChange('charmander');
});

$circle4.addEventListener('click', function (event) {
  viewChange('squirtle');
});

$circle5.addEventListener('click', function (event) {
  viewChange('jigglypuff');
});

function carousel() {
  if (data.view === 'pikachu') {
    viewChange('bulbasaur');
  } else if (data.view === 'bulbasaur') {
    viewChange('charmander');
  } else if (data.view === 'charmander') {
    viewChange('squirtle');
  } else if (data.view === 'squirtle') {
    viewChange('jigglypuff');
  } else if (data.view === 'jigglypuff') {
    viewChange('pikachu');
  }
}

$chevronRight.addEventListener('click', function (event) {
  if (event.target.matches('.right-chevron') && data.view === 'pikachu') {
    viewChange('bulbasaur');
  } else if (event.target.matches('.right-chevron') && data.view === 'bulbasaur') {
    viewChange('charmander');
  } else if (event.target.matches('.right-chevron') && data.view === 'charmander') {
    viewChange('squirtle');
  } else if (event.target.matches('.right-chevron') && data.view === 'squirtle') {
    viewChange('jigglypuff');
  } else if (event.target.matches('.right-chevron') && data.view === 'jigglypuff') {
    viewChange('pikachu');
  }
});

$chevronLeft.addEventListener('click', function (event) {
  if (event.target.matches('.left-chevron') && data.view === 'pikachu') {
    viewChange('jigglypuff');
  } else if (event.target.matches('.left-chevron') && data.view === 'jigglypuff') {
    viewChange('squirtle');
  } else if (event.target.matches('.left-chevron') && data.view === 'squirtle') {
    viewChange('charmander');
  } else if (event.target.matches('.left-chevron') && data.view === 'charmander') {
    viewChange('bulbasaur');
  } else if (event.target.matches('.left-chevron') && data.view === 'bulbasaur') {
    viewChange('pikachu');
  }
});

setInterval(carousel, 3000);
