var userList = document.getElementById('user-list');

function getUserList() {
  var ulXHR = new XMLHttpRequest();
  ulXHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
  ulXHR.responseType = 'json';
  ulXHR.addEventListener('load', function () {
    console.log(ulXHR.status);
    console.log(ulXHR.response);
    for (let i = 0; i < ulXHR.response.length; i++) {
      var li = document.createElement('li');
      li.textContent = ulXHR.response[i].name;
      userList.appendChild(li);
    }
  });
  ulXHR.send();
}

getUserList();
