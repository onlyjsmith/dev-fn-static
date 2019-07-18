const express = require('express');
const app = express();

const start_time = Date.now();

app.get('/', (req, res) => {
  console.log(`${Date.now()}: request`);

  const target = process.env.TARGET || 'World';
  res.send(`${start_time}: started\n${Date.now()}: request`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`${start_time}: started`);
});

