const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './assets/notes.html'))
);