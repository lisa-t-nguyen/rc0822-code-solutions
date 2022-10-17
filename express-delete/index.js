const express = require('express');

const expressApp = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

expressApp.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

expressApp.delete('/api/grades/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.params);
  const id = req.params.id;
  delete grades[id];
  res.sendStatus(204);
});

expressApp.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000! Star command out!');
});
