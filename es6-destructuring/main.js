const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title, author, libraryID } = book1;

const bookInformation = `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`;

console.log(bookInformation);

const book2 = {
  title2: 'Les Fleurs du mal',
  author2: 'Charles Baudelaire',
  libraryID2: 2345
};

const { title2: titleTwo, author2: authorTwo, libraryID2: libraryIDTwo } = book2;

const bookTwoInformation = `The title of the book is ${titleTwo}, the author is ${authorTwo}, and the library id is ${libraryIDTwo}`;

console.log(bookTwoInformation);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;

console.log('book3', book3);

console.log('book4', book4);

console.log('book5', book5);

const [, , , book6] = library;

console.log('book6', book6);
