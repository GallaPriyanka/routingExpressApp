const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002    

//An Array of courses
const course = [{ id: 1, courseName: 'course1' },{ id: 2, courseName: 'course2' },{ id: 3, courseName: 'course3' }]

//Home page
app.get('/', (req, res) => {
  res.send('<h1><strong>WS5-Routing an Express App<strong><h1>')
})

// Finding all the courses
app.get('/courses', (req, res) => {
  res.send(course)
})

// Finding course according to client request this takes paramaters
app.get('/courses/:id', (req, res) => {
  const c = (course.find(a => a.id === parseInt(req.params.id)))
  if (!c) res.send('<strong>CourseID not Found!!!!</strong><br> Try Again....')
  res.send(c)
})

//Routing with two parameters
app.get('/greeting/:year/:id', (req, res) => {
  res.send(req.params)
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('<h1>STATUS 404 - that page was not found<h1>');
})


//listening to the port 3002
app.listen(port, hostname, () => {
  console.log(`This app is  listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

