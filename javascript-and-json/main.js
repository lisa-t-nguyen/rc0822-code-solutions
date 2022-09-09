var forBooks = [
  {
    isbn: '9780142410387',
    title: 'The BFG',
    author: 'Roald Dahl'
  },
  {
    isbn: '9780425287842',
    title: 'Fantastic Mr. Fox',
    author: 'Roald Dahl'
  },
  {
    isbn: '9780142410363',
    title: 'James and the Giant Peach',
    author: 'Roald Dahl'
  }
];

console.log('type of', typeof forBooks);

var jsonBook = JSON.stringify(forBooks);

console.log('type of 2', typeof jsonBook);

var jsonString = '{"Number id":"97801", "String name":"Jane Hansen"}';

console.log('type of json String', typeof jsonString);

var jsonParse = JSON.parse(jsonString);

console.log('type of json Parse', typeof jsonParse);
