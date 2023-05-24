const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('login api!')
})

app.get('/register', (req, res) => {
  res.send('register api!')
})

app.get('/getuser', (req, res) => {
  res.send('getuser api!')
})

app.get('/users', (req, res) => {
  res.send('users api!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})