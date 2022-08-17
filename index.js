const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

app.get('/', function (req, res) {
  res.send('hello, world!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
