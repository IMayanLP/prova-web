const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes/food.routes')(app)

app.listen(PORT, () => { console.log(`Server is running on localhost:${PORT}`) })