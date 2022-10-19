const express = require('express');

const expressApp = express();

let nextID = 1;
const grades = {};

expressApp.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const property in grades) {
    allGrades.push(grades[property]);
  }
  res.json(allGrades);
});

const jsonExpress = express.json();
expressApp.use(jsonExpress);

expressApp.post('/api/grades', (req, res) => {
  const gradeObject = {
    nextID
  };
  Object.assign(gradeObject, req.body);
  // eslint-disable-next-line no-console
  console.log('Post is receiving data');
  grades[nextID] = gradeObject;
  nextID++;
  res.status(201).json(gradeObject);
  // eslint-disable-next-line no-console
  console.log(gradeObject);
});

expressApp.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Star board is listening on port 3000!');
});
