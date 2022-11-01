const express = require('express');
const path = require('path');

const expressApp = express();
const publicPath = path.join(__dirname, 'public');
const expressStatic = express.static(publicPath);

expressApp.use(expressStatic);

expressApp.listen(3000, () => {
  console.log('Listening on port 3000');
});
