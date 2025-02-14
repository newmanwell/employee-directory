const employees = require('./employess.js');

const express = require('express');
const app = express();
const port = 8081;

app.get ('/', (req, res) => {
  res.send('Hello employees!');
});

app.get ('/employees', (req,res) => {
  res.send(employees);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})