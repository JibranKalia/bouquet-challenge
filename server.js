const express = require('express');

const app = express();
const boutique = require('./api/project.js');
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/data', (req, res) => {
  const time = req.query.time;
  boutique.callApi()
    .then(out => boutique.dataCleanup(out, time))
    .then(out => res.send(out));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
