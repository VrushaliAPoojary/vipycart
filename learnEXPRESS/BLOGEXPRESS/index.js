const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const appumiddleware = (req, res, next)=>{
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname, "static")))
// app.use(appumiddleware)

app.get('/', (req, res) => {
  res.sendFile('hello world' + " " + req.params.name)
  
})

app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
//   res.status(500)
  res.json({"appu":21})
})

app.listen(port, ()=>{
  console.log(`app listening at http://localhost:${port}`)
})