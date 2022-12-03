const express = require('express');
const App = express();
const Port = 8080;
const BodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//DATABASE 
const db = require('./database');

//eXPRESS CONFIGURATION
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(express.static('public'));
App.use(
  cookieSession({
    name: "session",
    keys: ["cookie01"],
    httpOnly: true,
  })
);

//ROUTES
App.get('/api', (req, res) =>
  res.json({
    "users": ["Payam", "Armin", "Aryan"]
  }));

//Post router to add new users to the datebase
App.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const query = `
    INSERT INTO users 
      (name, email, password)
    VALUES
      ($1, $2, $3)
    RETURNING *;
    `;

  //Use bcrypt to hash password
  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.log("bcrypt error", error)
    }
    return db
      .query(query, [username, email, hash])
      .then(({ rows: users }) => {
        console.log('users', users);
        res.json(users)
      })
      .catch(err => console.log('error from post register', err))
  })
});

//Post request for user login
App.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('req.body', req.body)
  const query = `
  SELECT 
    email, 
    password, 
    id
  FROM 
    users
  WHERE 
    email = $1;
  `;
  return db
    .query(query, [email])
    .then(({ rows: user }) => {
      console.log("user", user)
      if (user.length > 0) {
        //Get the bcrypt password
        bcrypt.compare(password, user[0].password, (error, response) => {
          if (response) {
            res.send(user);
          } else {
            res.send({ error: "Please enter a valid email and password" });
          }
        })
      } else {
        res.send({ error: "Please enter a valid email and password" });
      }
    })
    .catch(err => console.log('err from post login', err))
});

//Prepend API to all Routes
const apiRoutes = require("./api-routes");
App.use("/api", apiRoutes)


App.listen(Port, () => {
  console.log(`listening to port ${Port}`)
})