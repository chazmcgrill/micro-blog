const express = require('express');
const db = require('./models');
const app = express();

app.get('/', (req, res) => {
  res.send('WORKING!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
})