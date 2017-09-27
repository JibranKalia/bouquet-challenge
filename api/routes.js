const express = require('express');
const boutique = require('./project.js');

const router = express.Router();

router.get('/data', (req, res) => {
  const time = req.query.time;
  boutique.callApi()
    .then(out => boutique.dataCleanup(out, time))
    .then(out => res.send(out))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
