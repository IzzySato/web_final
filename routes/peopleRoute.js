const express = require('express');
const router = express.Router();
const peopleData = require('../data/list');


//GET
router.get('/get', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const format = req.query['format'];
  if(format === 'name') {
    console.log(peopleData.getJSON01());
    res.json(peopleData.getJSON01());
  }
  else if (format === 'age'){
    console.log(peopleData.getHTML());
    res.send(peopleData.getHTML());
  }
  else res.send({msg: 'wrong format'});
});

//POST
router.post('/post', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body);
  res.send([req.body]);
});

module.exports = router;