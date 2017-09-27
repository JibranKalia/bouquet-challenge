const express = require('express');

const app = express();
const boutique = require('./api/project.js');
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
