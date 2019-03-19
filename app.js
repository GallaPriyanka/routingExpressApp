const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002

app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/big', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id', (req, res) => {
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy', (req, res) => {
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})
app.get('/welcome', (req, res) => {
  res.send('<h1>Welcome to Web Application<h1>')
})

app.get('/:user/', (req, res) => {
  res.send('<h1>Hello,' + req.params.user + '<h1><b><p>You entered name: ' + req.params.user)
})



// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('<h1 style="color:red text-align:center">status 404 - that page was not found<h1>');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

