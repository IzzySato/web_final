const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const peopleRouter = require('./routes/peopleRoute');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const msg404 = 'There are not the code that you are looking for.';
const port = 8000;

app.use('/css', express.static(path.join(__dirname, 'private', 'css')));
app.use('/img', express.static(path.join('private', 'img')));
app.use('/js', express.static(path.join('private', 'js')));

app.use('/people', peopleRouter);

app.get('/', (req, res) => {
  // res.set('Server', 'Wazubi Engine');
  // req.set('X-Powered-By', 'Magical Pixies');

  fs.readFile('./private/html/index.html', (error, pgPes) => {
    if(error){
      res.writeHead(404);
      res.write(msg404);
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(pgPes);
    }
    res.end();
  });
});

app.use( (req, res, next) => {
  res.status(404).send(msg404);
});

app.listen(port, () => {
  console.log('Listening port ' + port + '.' );
});

