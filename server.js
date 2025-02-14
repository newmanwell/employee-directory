const employees = require('./employess.js');

const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

app.get('/employees/random', (req, res) => {
  const randNumber = () => {
   const random = Math.floor(Math.random() * employees.length);
   return random;
  }
  const number = randNumber();
  console.log(number);
  res.send(employees[number]);
})

app.get('/employees', (req, res) => {
  res.send(employees);
})

app.get('/employees/:id', (req, res) => {
  const { id } = req.params;

  const employeeId = employees.find((oneEmployee) => {
    return oneEmployee.id === Number(id);
  })
  res.send(employeeId);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})