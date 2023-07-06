require('dotenv').config()
const express = require('express')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
app.use(cors())
app.use(volleyball)
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})

