const express = require('express');
const path = require('path');

const expressApp = express();
const expressStatic = express.static('public');

path.join(__dirname, 'public');

expressApp.use(expressStatic);

expressApp.listen(3000, () => {
  console.log('Listening on port 3000');
});
