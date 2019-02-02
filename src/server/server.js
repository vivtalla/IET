const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

var testJson = require('./ExampleJSON')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/form/:id', (req, res) => {
  console.log('Received: ' + req.params.id);
  // hard coded response for now
  res.send(testJson.testJSON);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
