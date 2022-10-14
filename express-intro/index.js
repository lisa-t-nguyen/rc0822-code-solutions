const express = require('express');
const expressApp = express();

expressApp.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
