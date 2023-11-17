const express = require('express')
const app = express()
const PORT = 3001;
const cors = require('cors')
const router = require('./routes/index')
app.use(cors())
app.use(express.json())

app.use('/', router)
// -> CRUD
app.listen(PORT, () => {
  console.log("Example app listening on port ", PORT)
})