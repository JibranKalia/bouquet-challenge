const express = require('express');

const router = express.Router();

const boutique = require('./project.js');

router.get('/', (req, res) => {
  boutique.callApi()
    .then(out => console.log(out))
    .then(res.send('done'));
});

module.exports = router;
