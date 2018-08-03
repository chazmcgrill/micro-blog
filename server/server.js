const express = require('express');
const db = require('./models');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/newuser', (req, res) => {
  // check username / email for duplicates & validity
  // get password hash
  // add information to the database
  // return success confirmation
  res.json(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
})