function users() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => console.log(data));
}

users();

function pokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(data => console.log(data));
}

pokemon();
