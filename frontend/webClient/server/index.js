require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(port, () => console.log(`Port: ${port}`));