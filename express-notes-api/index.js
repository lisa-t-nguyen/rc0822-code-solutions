const notesObject = require('./data.json');
const fs = require('fs');
const express = require('express');
const expressApp = express();

const jsonMiddleware = express.json();
expressApp.use(jsonMiddleware);

expressApp.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in notesObject.notes) {
    notesArray.push(notesObject.notes[property]);
  }
  res.json(notesArray);
});

expressApp.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (notesObject.notes[id]) {
    res.status(200).json(notesObject.notes[id]);
  } else {
    res.status(404).json('ERROR: ID does not exist');
  }
});

expressApp.post('/api/notes', (req, res) => {
  const content = req.body.content;
  if (!content) {
    res.status(400).json('ERROR: Must include content');
  } else {
    const note = {
      id: notesObject.nextId,
      content
    };
    notesObject.notes[note.id] = note;
    notesObject.nextId++;
    const stringNotes = JSON.stringify(notesObject, null, 2);
    fs.writeFile('data.json', stringNotes, 'utf-8', err => {
      if (err) {
        res.status(500).json('ERROR: A problem occurred in the server');
      } else {
        res.status(201).json(note);
      }
    });
  }
});

expressApp.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json('ERROR: Must include ID');
  } else if (notesObject.notes[id]) {
    delete notesObject.notes[id];
    const stringNotes = JSON.stringify(notesObject, null, 2);
    fs.writeFile('data.json', stringNotes, 'utf-8', err => {
      if (err) {
        res.status(404).json('ERROR: ID does not exist');
      } else {
        res.status(204).json();
      }
    });
  }
});

expressApp.put('/api/notes/:id', (req, res) => {
  const content = req.body.content;
  const id = Number(req.params.id);
  if (!content || !id) {
    res.status(400).json('ERROR: Must include ID and content');
  } else if (notesObject.notes[id]) {
    notesObject.notes[id].content = content;
    const stringNotes = JSON.stringify(notesObject, null, 2);
    fs.writeFile('data.json', stringNotes, 'utf-8', err => {
      if (err) {
        res.status(500).json('ERROR: A problem occurred in the server');
      } else {
        res.status(201).json(notesObject.notes[id]);
      }
    });
  }
});

expressApp.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Star command is listening on port 3000 successfully!');
});
