const express = require('express')
require('dotenv').config();

const users = require('./controllers/users');

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

app.get('/', (req, res, next) => {
  res.send('Hello Hudson Valley. you requested ' + req.url)
})

app.use('/users', users);

app.use( (err, req, res, next) =>{
  console.log(err);
  res.status(err.status || 500).send( { message: err.message } )
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})