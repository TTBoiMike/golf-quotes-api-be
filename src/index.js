const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 3000
const router = require('./router')

app.use(helmet())
app.use(cors())

app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`App Listening on port ${port}`))