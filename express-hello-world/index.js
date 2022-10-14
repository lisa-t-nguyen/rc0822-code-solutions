const express = require('express');

const expressApp = express();

expressApp.use(function (req, res) {
  (res.send('Hello World'));
});

expressApp.listen(3000, () => {
});
