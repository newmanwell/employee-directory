const employees = require('./employess.js');

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

app.get('/employees/random', (req, res) => {
  const randNumber = () => {
   const random = Math.floor(Math.random() * employees.length);
   return random;
  }
  const number = randNumber();
  
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

// Setting the next id number
let idNumber = 6;

app.post(`/api/v1/employees`, (req, res, next) => {
  // destructure the request body
  const { name } = req.body;
  // push new object to the array
  employees.push({
    id: idNumber,
    name: name
  });
  // increment the next id number
  idNumber++;
  res.send(employees);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})