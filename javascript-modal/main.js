var openModal = document.querySelector('.openmodal');
var surveyBox = document.querySelector('.surveybox-none');
var background = document.querySelector('.background');
var noButton = document.querySelector('.nobutton');

openModal.addEventListener('click', function (event) {
  if (openModal.className === 'openmodal') {
    openModal.className = 'openmodal-dark';
    surveyBox.className = 'surveybox';
    background.className = 'background-dark';
  } else if (openModal.className === 'openmodal-dark') {
    openModal.className = 'openmodal';
    surveyBox.className = 'surveybox-none';
    background.className = 'background';
  }
});

noButton.addEventListener('click', function (event) {
  if (noButton.className === 'nobutton') {
    openModal.className = 'openmodal';
    surveyBox.className = 'surveybox-none';
    background.className = 'background';
  }
});
