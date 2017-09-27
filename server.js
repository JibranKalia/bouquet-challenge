const express = require('express');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(require('./api/routes.js'));

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});