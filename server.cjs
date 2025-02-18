const employees = require('./db/employess.cjs');
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
  //error handling conditional
  if(!name) {
    const error = new Error("Must Enter Name");
    next(error);
  } else {
  // push new object to the array
  employees.push({
    id: idNumber,
    name: name
  });
  // increment the next id number
  idNumber++;
  res.send(employees);
  }
});

// 400 error handler for no name
app.use((err, reg, res, next) => {
  res.status(400).send(err.message);
});

// 404 error handler 
app.use ((req, res) =>{
  res.status(404).send('This page does not exist on the server');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});