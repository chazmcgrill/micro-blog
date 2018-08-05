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
  db.User.find({$or: [{username: req.body.username}, {email: req.body.email}]}, (err, user) => {
    if (err) {
      return res.json({error: "Error Creating New User"});

    } else if (user[0]) {
      if (user[0].username === req.body.username && user[0].email === req.body.email) {
        res.json({ error: "Username and email already exist" })
      } else if (user[0].username === req.body.username) {
        res.json({error: "Username already exists"})
      } else {
        res.json({ error: "Email already exists" })
      }
      
    } else {
      const newUser = new db.User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save((err, data) => {
        if (err) return res.json({error: "Error saving, retry"});
        res.json(data);
      })
      // get password hash
      // add information to the database
      // return success confirmation
    }

  });
  // res.json(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
})