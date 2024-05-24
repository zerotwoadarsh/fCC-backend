require('dotenv').config()

const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hey')
})

app.get('/twitter', (req, res) => {
    res.send('here is twitter')
})

app.listen(process.env.PORT, () => {
    console.log(port)
})