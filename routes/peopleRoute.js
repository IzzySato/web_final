const express = require('express');
const router = express.Router();
const peopleData = require('../data/list');


//GET
router.get('/', (req, res) => {
  // INSIDE FORMAT !!
  // res.setHeader('Content-Type', 'application/json');
  const { format, name = '', age = 0 } = req.query;

  if(format === 'json') {
    res.setHeader('Content-Type', 'application/json');
    console.log(peopleData.getJSON());
    res.json(peopleData.getJSON());
  }
  else if (format === 'html'){
    res.setHeader('Content-Type', 'text/html');
    console.log(peopleData.getHTML());
    res.send(peopleData.getPeopleHTML());
  }
  else res.send({msg: 'wrong format'});
});

//POST
router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // SAVE THE DATA !!
  peopleData.add(req.body);
  console.log(req.body);
  res.send([req.body]);
});

module.exports = router;