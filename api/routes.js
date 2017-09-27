const express = require('express');
const path = require('path');

const router = express.Router();
const boutique = require('./project.js');

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../index.html`));
  // boutique.callApi()
  // .then(out => console.log(out));
});
app.use('/', express.static(path.join(__dirname, 'public')));

module.exports = router;
