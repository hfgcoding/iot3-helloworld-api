const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/api/v1/hello', (req, res) => {
  res.status(200).send({ msg: 'Hello CI/CD World!', secret: process.env.SECRET }).end()
})

app.listen(port, () => {
  console.log(`Hello World API listening at http://localhost:${port}`)
})
