const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Visual Thinking API welcome!' });
});

app.listen(PORT, () => {
  console.log(`Visual Thinking API runs in port ${PORT}`);
});
