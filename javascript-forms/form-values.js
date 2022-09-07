var formElements = document.querySelector('#contact-form');

formElements.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameValues = formElements.elements.name.value;
  var emailValues = formElements.elements.email.value;
  var messageValues = formElements.elements.message.value;
  var objectValues = {
    nameValues,
    emailValues,
    messageValues
  };
  console.log('values of form', objectValues);
  formElements.reset();
});
