const express = require('express');
const StudentController = require('./controllers/StudentController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Visual Thinking API welcome!' });
});

app.get('/v1/students', (req, res) => {
  const students = StudentController.getAllStudents();

  res.status(200).json(students);
});

app.listen(PORT, () => {
  console.log(`Visual Thinking API runs in port ${PORT}`);
});
