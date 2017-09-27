const express = require('express');

const app = express();
const path = require('path');
app.use(require('./api/routes.js'));


app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
