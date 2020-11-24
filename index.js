const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let allStudents= [{
  name: "Renaldo",
  age: 22
}]

app.post('/students', (req, res, next) => {
  console.log(req.body)
  const newStudent = req.body

  allStudents.push(newStudent)
  res.status(200).json(newStudent)
})

app.get('/students', (req, res, next) => {
  res.status(200).json(allStudents)
})


const port = 5000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
