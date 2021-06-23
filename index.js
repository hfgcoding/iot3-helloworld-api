const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/hello', (req, res) => {
  res.status(200).send({ msg: 'Hello World!', secret: process.env.SECRET }).end()
})

app.listen(port, () => {
  console.log(`Hello World API listening at http://localhost:${port}`)
})